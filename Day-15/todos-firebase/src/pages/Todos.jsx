import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TodoItem from "../components/TodoItem";
import TodoModal from "../components/TodoModal";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "../context/AuthContext";
import {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../services/todo.service";

export default function Todos() {
  const { user } = useAuth();

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await getTodos(user.uid);
    setTodos(data);
  };

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;

    await addTodo(user.uid, {
      title: newTodo,
      completed: false,
    });

    setNewTodo("");
    loadTodos();
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, {
      completed: !todo.completed,
    });
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
    setOpenModal(true);
  };

  const handleSaveEdit = async (todo) => {
    await updateTodo(todo.id, { title: todo.title });
    loadTodos();
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const selectedTodo = todos.find((t) => t.id === selectedTodoId);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar filter={filter} setFilter={setFilter} />

      <div className="flex flex-1">
        <Sidebar
          todos={filteredTodos}
          selectedTodoId={selectedTodoId}
          setSelectedTodoId={setSelectedTodoId}
        />

        <div className="flex-1 p-6">
          <div className="flex gap-3 mb-6">
            <Input
              placeholder="New todo..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button onClick={handleAddTodo}>Add</Button>
          </div>

          {selectedTodo ? (
            <TodoItem
              todo={selectedTodo}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ) : (
            <p className="text-gray-500">Select a todo to view details</p>
          )}
        </div>
      </div>

      <Footer />

      <TodoModal
        open={openModal}
        setOpen={setOpenModal}
        todo={editTodo}
        onSave={handleSaveEdit}
      />
    </div>
  );
}

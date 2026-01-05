import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, { text: todo, done: false }]);
    setTodo("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-bold">Todo List</h2>

        <div className="flex gap-2">
          <Input
            placeholder="Add a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2"
          >
            <Checkbox
              checked={t.done}
              onCheckedChange={() => toggleTodo(i)}
            />
            <span
              className={
                t.done ? "line-through text-gray-500" : ""
              }
            >
              {t.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

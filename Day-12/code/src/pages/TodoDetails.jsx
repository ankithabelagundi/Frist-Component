import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTodoById } from "../api/todoService";

function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodoById(id)
      .then((data) => {
        setTodo(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <h2>Loading todo...</h2>;
  if (!todo) return <h2>Todo not found</h2>;

  return (
    <div>
      <h1>Todo Details</h1>

      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? "Completed" : "Pending"}</p>

      <Link to="/">⬅ Back to Todo List</Link>
    </div>
  );
}

export default TodoDetails;

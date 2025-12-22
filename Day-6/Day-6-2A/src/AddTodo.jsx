import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default AddTodo;

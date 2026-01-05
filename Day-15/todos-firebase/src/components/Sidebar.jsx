export default function Sidebar({ todos, selectedTodoId, setSelectedTodoId }) {
  return (
    <div className="w-1/4 border-r p-4 overflow-y-auto">
      <h2 className="font-semibold mb-3">Your Todos</h2>

      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => setSelectedTodoId(todo.id)}
          className={`p-2 mb-2 rounded cursor-pointer
            ${
              selectedTodoId === todo.id
                ? "bg-blue-100 font-medium"
                : "hover:bg-gray-100"
            }`}
        >
          {todo.title}
        </div>
      ))}
    </div>
  );
}

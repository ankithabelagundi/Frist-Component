import { Button } from "@/components/ui/button";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) {
  return (
    <div className="border rounded p-4 mb-3 flex justify-between items-center">
      <div>
        <p
          className={`text-lg ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.title}
        </p>
        <p className="text-sm text-gray-500">
          Status: {todo.completed ? "Completed" : "Pending"}
        </p>
      </div>

      <div className="flex gap-2">
        <Button size="sm" onClick={() => onToggle(todo)}>
          Toggle
        </Button>

        <Button size="sm" variant="outline" onClick={() => onEdit(todo)}>
          Edit
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ filter, setFilter }) {
  const { user, logoutUser } = useAuth();

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">📝 Todos App</h1>

      <div className="flex gap-3">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>

        <Button
          variant={filter === "completed" ? "default" : "outline"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>

        <Button
          variant={filter === "pending" ? "default" : "outline"}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
      </div>

      {user && (
        <Button variant="destructive" onClick={logoutUser}>
          Logout
        </Button>
      )}
    </div>
  );
}

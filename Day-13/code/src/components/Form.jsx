export default function Form() {
  return (
    <form className="max-w-md bg-white p-6 rounded-xl shadow space-y-4">
      <input
        placeholder="Name"
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        placeholder="Email"
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}


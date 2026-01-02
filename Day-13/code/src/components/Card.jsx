export default function Card({ title }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">
        Simple Tailwind card component.
      </p>
      <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 active:bg-gray-400">
        Click
      </button>
    </div>
  );
}

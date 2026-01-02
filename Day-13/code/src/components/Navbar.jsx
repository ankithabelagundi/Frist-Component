export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex flex-col md:flex-row md:space-x-6">
      <a className="hover:text-blue-600">Home</a>
      <a className="hover:text-blue-600">Features</a>
      <a className="hover:text-blue-600">Contact</a>
    </nav>
  );
}

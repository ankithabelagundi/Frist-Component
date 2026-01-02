import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Table from "./components/Table";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen space-y-10 p-6">
      <Navbar />
      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Feature One" />
        <Card title="Feature Two" />
        <Card title="Feature Three" />
      </div>

      <Table />
      <Form />
    </div>
  );
}


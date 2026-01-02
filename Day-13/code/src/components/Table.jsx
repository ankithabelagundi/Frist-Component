export default function Table() {
  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Role</th>
          <th className="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {["A", "B", "C"].map((item, i) => (
          <tr
            key={i}
            className="odd:bg-white even:bg-gray-100 hover:bg-gray-200"
          >
            <td className="border p-2">{item}</td>
            <td className="border p-2">Developer</td>
            <td className="border p-2">Active</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Hero() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Tailwind + React
      </h1>

      <img
        src="https://via.placeholder.com/400"
        className="mx-auto rounded-xl shadow-lg hover:scale-105 transition"
      />
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Token Discovery Dashboard
        </h1>

        <p className="text-gray-400 mb-8">
          Explore real-time market activity, price movements, volume changes,
          and token trends across multiple categories — New Pairs, Final Stretch
          and Migrated tokens.
        </p>

        <a
          href="/pulse"
          className="inline-block px-5 py-2.5 rounded-lg
          bg-blue-500 hover:bg-blue-600
          transition-colors duration-200 font-medium"
        >
          Go to Token Table →
        </a>

        
      </div>
    </main>
  );
}

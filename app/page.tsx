export default function Home() {
  return (
    <main className="container mx-auto py-4">
      <h1 className="text-4xl font-bold mb-8">Game Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Games will be loaded client side */}
        <div className="animate-pulse bg-gray-200 rounded-lg h-48"></div>
        <div className="animate-pulse bg-gray-200 rounded-lg h-48"></div>
        <div className="animate-pulse bg-gray-200 rounded-lg h-48"></div>
      </div>
    </main>
  );
} 
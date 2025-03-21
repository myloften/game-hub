import { getGames } from "@/lib/api";

export default async function Home() {
  const games = await getGames();
  
  // ... existing code ...
}

// ... existing code ... 
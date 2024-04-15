import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Welcome to Our Website</h1>
        <p className="text-lg mb-8">
          Explore our amazing collection of posts and albums. 
          Discover new stories, inspirations, and memories.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/posts">
            Explore Posts
          </Link>
          <Link href="/albums">
            Discover Albums
          </Link>
        </div>
      </div>
    </div>
  );
}

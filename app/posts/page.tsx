import React from "react";
import ViewUserButton from "../components/Posts/ViewUserButton";
import CardList from "../components/Posts/CardList";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url);
  const posts: Iposts[] = await response.json();
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-4 text-center font-bold text-3xl mb-4">Explore Posts</h1>
        <CardList>
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.body}</p>
              <ViewUserButton userId={post.userId} />
            </div>
          ))}
        </CardList>
      </div>
      <h1 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-4 text-center font-bold text-3xl mb-4">
        Welcome to
      </h1>
      <h1 className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white py-4 text-center font-bold text-3xl mb-8">
        POSTINGAN PAGE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {posts.map((post) => (
          <CardList key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 font-bold text-xl mb-2">
              ID: {post.id}
            </p>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">
              {post.title}
            </h2>
            <p className="text-gray-700">{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        ))}
      </div>
    </>
  );
};

export default Posts;

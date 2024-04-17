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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-200 to-gray-100">
        <h1 className=" text-purple-600 py-4 text-center font-bold text-4xl mb-8">
          Explore Posts
        </h1>
        <CardList>
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-purple-600">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.body}</p>
              </div>
              <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
                <ViewUserButton userId={post.userId} />
              </div>
            </div>
          ))}
        </CardList>
      </div>
    </>
  );
};

export default Posts;

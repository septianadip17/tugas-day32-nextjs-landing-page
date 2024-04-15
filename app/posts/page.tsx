import React from "react";
import styles from "./postPage.module.css";
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
      <h1 className={styles.bgRed}>Welcome to</h1>
      <h1 className="bg-fuchsia-500">POSTINGAN PAGE</h1>
      {posts.map((post) => (
        <CardList key={post.id}>
          <p>{post.id}</p>
          <i>{post.title}</i>
          <p>{post.body}</p>
          <ViewUserButton userId={post.userId} />
        </CardList>
      ))}
    </>
  );
};

export default Posts;

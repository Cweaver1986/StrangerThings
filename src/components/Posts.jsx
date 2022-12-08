import React, { useState, useEffect } from "react";
import { getPosts } from "../api/auth";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await getPosts();
      // console.log(response);
      setPosts(response);
    };
    getAllPosts();
  }, []);

  let postsToMap = posts.map((post, index) => {
    return (
      <div className="posts" key={index}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <p>{post.location}</p>
        <p>{post.willDeliver}</p>
      </div>
    );
  });

  return (
    <>
      <h1>Posts</h1>
      <div>{postsToMap}</div>
    </>
  );
};

export default Posts;

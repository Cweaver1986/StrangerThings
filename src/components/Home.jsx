import React, { useState, useEffect } from "react";
import { fetchMe } from "../api/auth";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await fetchMe(token);
      //   console.log(response);
      setPosts(response.posts);
      setMessages(response.messages);
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

  let messagesToMap = messages.map((message, index) => {
    return (
      <div className="posts" key={index}>
        <h2>{message.post.title}</h2>
        <p>{message.fromUser.username}</p>
        <p>{message.content}</p>
      </div>
    );
  });

  return (
    <>
      <h1>Home</h1>
      <h2>Posts</h2>
      <div>{postsToMap}</div>
      <h2>Messages</h2>
      <div>{messagesToMap}</div>
    </>
  );
};

export default Home;

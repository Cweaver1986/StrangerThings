import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../api/auth";
import "./Posts.css";

const Posts = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const filteredPosts = posts.filter((post) => post.title.includes(searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  let postsToMap = postsToDisplay.map((post, index) => {
    return (
      <div className="posts" key={index}>
        <h2>{post.title}</h2>
        <h3>Author : {post.author.username}</h3>
        <p>Description : {post.description}</p>
        <p>Price : {post.price}</p>
        <p>Location : {post.location}</p>
        <button
          onClick={() => {
            navigate(`/posts/${post._id}`);
          }}
        >
          See Post!
        </button>
      </div>
    );
  });
  return (
    <>
      <h3>Search Posts</h3>
      <div className="posts">
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            console.log(searchTerm);
          }}
        />
      </div>
      <h1>Posts</h1>
      <div>{postsToMap}</div>
    </>
  );
};
export default Posts;

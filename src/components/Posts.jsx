import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Messages from "./Messages";
import "./Posts.css";

const Posts = ({ posts, setPosts, token }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  let postsToMap = posts.map((post, index) => {
    return (
      <div className="posts" key={index}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <p>{post.location}</p>
        <p>{post.willDeliver}</p>
        {show ? (
          <Messages token={token} post={post} show={show} setShow={setShow} />
        ) : (
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Message
          </button>
        )}
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

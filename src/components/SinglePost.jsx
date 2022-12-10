import React, { useState, useEffect } from "react";
// import { deletePostById } from "../api/auth";
import { useParams, useNavigate } from "react-router-dom";

const SinglePost = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  useEffect(() => {
    async function getSinglePost() {
      const filteredPost = posts.filter((post) => post._id === id);
      setPost(filteredPost);
    }
    getSinglePost();
  }, []);

  return (
    <div className="posts">
      <h2>{posts.title}</h2>
      <p>{posts.description}</p>
      <p>{posts.price}</p>
      <p>{posts.location}</p>
      <p>{posts.willDeliver}</p>
      <button
        onClick={async () => {
          //   await deletePostByID(post._id);
          navigate("/");
        }}
      >
        Delete Post
      </button>
    </div>
  );
};

export default SinglePost;

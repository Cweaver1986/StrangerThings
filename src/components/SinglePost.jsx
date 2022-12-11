import React, { useState, useEffect } from "react";
import { deletePostById } from "../api/auth";
import { useParams, useNavigate } from "react-router-dom";
import Messages from "./Messages";
import EditPost from "./EditPost";

const SinglePost = ({ posts }) => {
  const [show, setShow] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [[post], setPost] = useState(posts.filter((post) => post._id === id));
  const token = localStorage.token;

  console.log(post);
  return post && post._id ? (
    <>
      <h1>Post</h1>
      <div className="posts" key={post._id}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <p>{post.location}</p>
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
        {editPost ? (
          <EditPost token={token} post={post} show={show} setShow={setShow} />
        ) : (
          <button
            onClick={() => {
              setEditPost(!editPost);
            }}
          >
            Edit Post
          </button>
        )}
        <button
          onClick={async () => {
            await deletePostById(post._id);
            navigate(`/`);
          }}
        >
          Delete Post
        </button>
      </div>
    </>
  ) : (
    <h2>Sorry No Post</h2>
  );
};
export default SinglePost;

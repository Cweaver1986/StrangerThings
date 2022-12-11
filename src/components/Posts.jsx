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
        <h3>{post.author.username}</h3>
        <button
          onClick={() => {
            navigate(`/posts/${post._id}`);
          }}
        >
          See Post!
        </button>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <p>{post.location}</p>
        <p>{}</p>
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

// import React, { useState, useEffect } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
// import Messages from "./Messages";
// import EditPost from "./EditPost";
// import "./Posts.css";

// const Posts = ({ posts, setPosts, token }) => {
//   const [show, setShow] = useState(false);
//   const [editPost, setEditPost] = useState(false);
//   const navigate = useNavigate();
//   const username = localStorage.getItem("username");

//   let postsToMap = posts.map((post, index) => {
//     const postId = post._id;
//     // console.log(post);
//     return (
//       <div className="posts" key={post._id}>
//         <h2>{post.title}</h2>
//         <p>{post.description}</p>
//         <p>{post.price}</p>
//         <p>{post.location}</p>
//         <p>{post.willDeliver}</p>
//         {show ? (
//           <Messages token={token} post={post} show={show} setShow={setShow} />
//         ) : (
//           <button
//             onClick={() => {
//               setShow(!show);
//             }}
//           >
//             Message
//           </button>
//         )}
//         {editPost ? (
//           <EditPost token={token} post={post} show={show} setShow={setShow} />
//         ) : (
//           <button
//             onClick={() => {
//               setEditPost(!editPost);
//             }}
//           >
//             Edit Post
//           </button>
//         )}
//         <button>Delete Post</button>
//       </div>
//     );
//   });

//   return (
//     <>
//       <h1>Posts</h1>
//       <div>{postsToMap}</div>
//     </>
//   );
// };

// export default Posts;

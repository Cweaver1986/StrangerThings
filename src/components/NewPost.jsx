import React from "react";
import { useState } from "react";
import { newPost } from "../api/auth";
import "./NewPost.css";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  return (
    <div>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const post = await newPost(
              title,
              description,
              price,
              willDeliver,
              location
            );
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <h1>Add New Post</h1>
        <label htmlFor="title">Title</label>
        <input
          value={title}
          type="text"
          required
          placeholder="title"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          value={description}
          type="text"
          required
          placeholder="description"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          value={price}
          type="text"
          required
          placeholder="price"
          onChange={(event) => setPrice(event.target.value)}
        ></input>
        <label htmlFor="location">Location</label>
        <input
          value={location}
          type="text"
          placeholder="location"
          onChange={(event) => setLocation(event.target.value)}
        ></input>
        <label htmlFor="willDeliver">Will Deliver</label>
        <input
          value={willDeliver}
          type="checkbox"
          onChange={() => setWillDeliver(!willDeliver)}
        ></input>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default NewPost;

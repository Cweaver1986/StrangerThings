import React from "react";
import { useState } from "react";
import { editPost } from "../api/auth";

const EditPost = ({ post }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const postId = post._id;

  return (
    <div>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const post = await editPost(
              postId,
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
        <label htmlFor="title">Title</label>
        <input
          value={title}
          type="text"
          placeholder="title"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          value={description}
          type="text"
          placeholder="description"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          value={price}
          type="text"
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
        <button type="submit">Edit Post</button>
      </form>
    </div>
  );
};

export default EditPost;

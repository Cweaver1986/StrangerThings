import React, { useState } from "react";
import { newMessage } from "../api/auth";
import "./Messages.css";

const Messages = ({ post }) => {
  const [content, setContent] = useState("");
  const postId = post._id;
  const token = localStorage.token;

  return (
    <div>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const response = await newMessage(content, token, postId);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <input
          className="msginput"
          value={content}
          type="text"
          placeholder="Message"
          onChange={(event) => setContent(event.target.value)}
        ></input>
        <button className="msgbutton" type="submit">
          Create Message
        </button>
      </form>
    </div>
  );
};

export default Messages;

import React, { useState } from "react";
import { newMessage } from "../api/auth";

const Messages = ({ token }) => {
  const [content, setContent] = useState("");
  const [postId, setPostId] = useState("");
  //   const postId = "638ea173e982fb00176ae0bd";

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
        <h1>Send Message</h1>
        <input
          value={content}
          type="text"
          placeholder="Message"
          onChange={(event) => setContent(event.target.value)}
        ></input>
        <button type="submit">Create Message</button>
      </form>
    </div>
  );
};

export default Messages;

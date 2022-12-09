import { useState, useEffect } from "react";
import { getPosts, fetchMe } from "./api/auth";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Register from "./components/Register";
import NewPost from "./components/NewPost";
import Home from "./components/Home";
import "./App.css";
import Messages from "./components/Messages";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
      // console.log("user", user);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await getPosts();
      // console.log(response);
      setPosts(response);
    };
    getAllPosts();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/posts"
          element={<Posts posts={posts} setPosts={setPosts} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <Register
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/messages" element={<Messages token={token} />} />
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;

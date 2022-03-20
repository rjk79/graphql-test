import React from "react";
import { Route, Routes } from "react-router-dom";
import UserIndex from "./users/UserIndex";
import UserDetail from "./users/UserDetail";
import PostIndex from "./posts/PostIndex";
import PostDetail from "./posts/PostDetail";

const App = () => {
  return (<div>
      <Routes>
        <Route path="/" element={<UserIndex />} />
        <Route path="/posts" element={<PostIndex />} />
        <Route path="users/:userId" element={<UserDetail />} />
        <Route path="posts/:postId" element={<PostDetail />} />
      </Routes>
  </div>)
};

export default App;
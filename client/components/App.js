import React from "react";
import { Route, Routes } from "react-router-dom";
import UserIndex from "./users/UserIndex";

const App = () => (
  <div>
      <UserIndex />
      {/* <Routes>
        <Route path="/" component={UserIndex} />
      </Routes> */}
  </div>
);

export default App;
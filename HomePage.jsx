import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <Link to="/TaskList">Go to Task List</Link>
    </div>
  );
};

export default HomePage;

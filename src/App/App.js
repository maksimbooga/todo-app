import React from "react";
import response from "../data/response.js";
import TaskList from "../components/TaskList/TaskList";
import "./App.scss";
import "../assets/styles/main.scss";

function App() {
  return (
    <div>
      <TaskList tasks={response} />
    </div>
  );
}

export default App;

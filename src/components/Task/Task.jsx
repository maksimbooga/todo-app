import React from "react";
import "./Task.scss";

function Task({ title, description, estimation }) {
  return (
    <>
      <h1 className="task-title">{title || ""}</h1>
      <h2 className="task-description">{description || ""}</h2>
      <h2 className="task-estimation">{estimation || ""}</h2>
    </>
  );
}

export default Task;

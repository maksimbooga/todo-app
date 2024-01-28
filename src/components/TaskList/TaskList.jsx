import React from "react";
import Task from "../Task/Task";
import "./TaskList.scss";

function TaskList({ tasks }) {
  const texts = [
    "TO DO",
    "WAITING",
    "IN PROGRESS",
    "PAUSED",
    "CODE REVIEW",
    "READY FOR DEPLOY",
    "READY FOR ...",
    "READY FOR ...",
    "READY FOR ...",
  ];

  const totalColumns = 9;
  const minCardsPerColumn = 4;

  const getColumnIndex = (id) => {
    return typeof id === "number" ? id % totalColumns : -1;
  };

  const cardStructure = Array.from(
    { length: totalColumns },
    (_, columnIndex) => {
      const actualCards = tasks
        .filter((task) => getColumnIndex(task.id) === columnIndex)
        .map((task, index) => (
          <Task
            key={index}
            title={task.title}
            description={task.description}
            estimation={task.estimation}
          />
        ));

      const emptyCards = Array.from(
        { length: Math.max(minCardsPerColumn - actualCards.length, 0) },
        (_, index) => <Task key={actualCards.length + index} />,
      );

      return [...actualCards, ...emptyCards];
    },
  );

  return (
    <div className="task-list-container">
      {cardStructure.map((column, columnIndex) => (
        <div key={columnIndex} className={`task-list task-list-${columnIndex}`}>
          <div className="column-name">{texts[columnIndex]}</div>
          {column.map((card, index) => (
            <div key={index} className="task-item">
              {card}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TaskList;

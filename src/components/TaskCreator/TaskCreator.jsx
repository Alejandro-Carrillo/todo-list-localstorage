import { useState } from "react";
import React from "react";
import "./TaskCreator.css";

const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          className="input-text"
          type="text"
          required
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <div className="new-task">Nueva tarea</div>
      </div>
      <button className="btn">Guardar</button>
    </form>
  );
};

export default TaskCreator;

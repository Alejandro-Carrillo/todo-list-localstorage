import React from "react";
import TaskRow from "../TaskRow/TaskRow";
import "./TaskTable.css";

const TaskTable = ({
  tasks,
  toggleTask,
  showComplite = false,
  title,
  deleteOne,
}) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow
          task={task}
          key={task.name}
          toggleTask={toggleTask}
          deleteOne={deleteOne}
        />
      ));
  };

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th className="table-title">{title}</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showComplite)}</tbody>
    </table>
  );
};

export default TaskTable;

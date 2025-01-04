import React from "react";
import "./TaskRow.css";
import BtnDelete from "../BtnDelete/BtnDelete";
const TaskRow = ({ task, toggleTask, deleteOne }) => {
  return (
    <tr className="task-tr">
      <td className="task-td">
        {task.name}
        <div className="conteiner-img-delete">
          <input
            className="check-row"
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task)}
          />
          {task.done === true && (
            <BtnDelete task={task} deleteOne={deleteOne} />
          )}
        </div>
      </td>
    </tr>
  );
};

export default TaskRow;

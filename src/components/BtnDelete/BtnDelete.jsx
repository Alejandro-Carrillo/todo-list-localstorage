import React from "react";
import "./BtnDelete.css";

const BtnDelete = ({ task, deleteOne }) => {
  const deleteThis = () => {
    deleteOne(task.name);
  };
  return (
    <img
      className="img-delete"
      src="./delete.svg"
      alt="img-delete"
      onClick={deleteThis}
    />
  );
};

export default BtnDelete;

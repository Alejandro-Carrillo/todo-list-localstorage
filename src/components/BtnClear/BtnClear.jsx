import React from "react";
import "./BtnClear.css";
const BtnClear = ({ cleanTask }) => {
  const handleDelete = () => {
    if (
      window.confirm(
        "Estas seguro de querer borrar todas las tareas realizadas?"
      )
    ) {
      cleanTask();
    }
  };
  return (
    <button className="btn-clear" onClick={handleDelete}>
      Eliminar tareas realizadas
    </button>
  );
};

export default BtnClear;

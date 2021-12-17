import React from "react";

const AddButton = (props) => {
  return (
    <button onClick={props.onClick} className="btn">{props.label}
    Добавить
    </button>
  );
};

export default AddButton;




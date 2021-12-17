
import React from "react";

const RemoveButton = (props) => {
  return (
    <button onClick={props.onClick} className="btn">{props.label}
    Удалить
    </button>
  );
};

export default RemoveButton;


import React from "react";
import "../styles/Box.css";

const Box = ({ value, onClick }) => {
  const style = value === "X" ? "x" : "o";

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Box;

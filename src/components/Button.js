import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({ icons, handleClick, type, arrayName }) => {
  return (
    <button onClick={handleClick} className={`${arrayName} button-core`}>
      {" "}
      <FontAwesomeIcon icon={icons[type]} />
    </button>
  );
};

export default Button;

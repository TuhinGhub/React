import React from "react";

const Button = (props) => {
  const { label, style, onClick } = props;
  return (
    <button className="button" style={style} onClick={onClick}>
      {label}
    </button>
  );
};
 export default Button;
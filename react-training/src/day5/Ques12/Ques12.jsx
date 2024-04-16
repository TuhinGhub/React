import React from "react";
import Button from  "./Button"

const Ques12 = () => {
  return (
    <>
          <Button
          label="Primary Button"
          style={{ background: "green", color: "white" }}
          onClick={() => alert("Primary button clicked")}
        ></Button>
        <Button
          label="Secondary Button"
          style={{ background: "yellow", color: "black" }}
          onClick={() => alert("Secondary button clicked")}
        ></Button>
        <Button
          label="Danger Button"
          style={{ background: "red", color: "white" }}
          onClick={() => alert("Danger button clicked")}
        ></Button>
    </>
  );
};

export default Ques12;

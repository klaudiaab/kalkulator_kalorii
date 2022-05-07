import React from "react";

function BmiAge({ value, onInputClick }) {
  return (
    <input
      type="number"
      value={value}
      id="BMIAge"
      onChange={(e) => {
        e.preventDefault();
        onInputClick(e.target.value);
      }}
    ></input>
  );
}

export default BmiAge;

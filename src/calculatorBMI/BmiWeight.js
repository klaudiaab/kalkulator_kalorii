import React from "react";

function BmiWeight({ value, onInputClick }) {
  return (
    <input
      type="number"
      value={value}
      id="BMIWeight"
      onChange={(e) => {
        e.preventDefault();
        onInputClick(e.target.value);
      }}
    ></input>
  );
}

export default BmiWeight;

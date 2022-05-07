import React from "react";

function Height({ value, onInputClick }) {
  return (
    <input
      type="number"
      value={value}
      id="BMIHeight"
      onChange={(e) => {
        e.preventDefault();
        onInputClick(e.target.value);
      }}
    ></input>
  );
}

export default Height;

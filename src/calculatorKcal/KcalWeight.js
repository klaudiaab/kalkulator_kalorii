import React from "react";

function KcalWeight({ value, onInputClick }) {
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

export default KcalWeight;

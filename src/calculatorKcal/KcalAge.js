import React from "react";

function KcalAge({ value, onInputClick }) {
  return (
    <input
      type="number"
      value={value}
      id="KcalAge"
      onChange={(e) => {
        e.preventDefault();
        onInputClick(e.target.value);
      }}
    ></input>
  );
}

export default KcalAge;

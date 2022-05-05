import React, { useState } from "react";

function KcalHeight({ value, onInputClick }) {
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

export default KcalHeight;


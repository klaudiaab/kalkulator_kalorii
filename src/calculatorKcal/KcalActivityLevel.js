import React, { useState } from "react";

function KcalActivityLevel({ value, onInputClick }) {
  return (
    <select
      value={value}
      onChange={(e) => {
        e.preventDefault();
        onInputClick(e.target.value);
      }}
    >
      <option value="level_1">Mała aktywność</option>
      <option value="level_2">
        Umiarkowanie aktywny (trenowanie 2-3 razy w tygodniu lub fizyczny
        charakter pracy)
      </option>
      <option value="level_3">Aktywny (trenowanie 4-5 razy w tygodniu)</option>
      <option value="level_4">
        Bardzo aktywny (trenowanie 3-4 razy w tygodniu oraz duży ruch w ciągu
        dnia)
      </option>
      <option value="level_5">
        Sportowiec wyczynowy (trenowanie 6-7 razy w tygodniu)
      </option>
      <option value="level_6">
        Sport ekstremalny (duża aktywność w ciągu dnia oraz zawód to sport)
      </option>
    </select>
  );
}

export default KcalActivityLevel;

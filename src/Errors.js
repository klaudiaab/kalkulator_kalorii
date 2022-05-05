import React from "react";

function Errors({ errors }) {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <ul className="errors_kcal">
      {errors.map((error, key) => {
        return <li key={key}>{error}</li>;
      })}
    </ul>
  );
}

export default Errors;

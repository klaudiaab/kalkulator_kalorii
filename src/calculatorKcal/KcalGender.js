import React from "react";
import classNames from "classnames";
function KcalGender({ value, gender, setGender, setIsToogleColor }) {
  const chooseGenderMale = (e) => {
    e.preventDefault();
    setGender("male");
    setIsToogleColor((prevState) => {
      return prevState;
    });
  };
  const chooseGenderFemale = (e) => {
    e.preventDefault();
    setGender("female");

    setIsToogleColor((prevState) => {
      return prevState;
    });
  };
  return (
    <div className="buttons">
      <button
        value={value}
        type="submit"
        className={classNames({
          input_female_changeColor: gender === "female",
        })}
        onClick={chooseGenderFemale}
      >
        kobieta
      </button>
      <button
        value={value}
        className={classNames({
          input_male_changeColor: gender === "male",
        })}
        type="submit"
        onClick={chooseGenderMale}
      >
        mężczyzna
      </button>
    </div>
  );
}

export default KcalGender;

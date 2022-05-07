import React, { useState } from "react";
import Errors from "../Errors";
import KcalAge from "./KcalAge";
import KcalHeight from "./KcalHeight";
import KcalWeight from "./KcalWeight";
import KcalActivityLevel from "./KcalActivityLevel";
import KcalGender from "./KcalGender";
import ReactLoading from "react-loading";
import Loading from "./Loading";

const getData = (
  height,
  gender,
  age,
  weight,
  activityLevel,
  successCallback
) => {
  fetch(
    `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
        "X-RapidAPI-Key": "dc105319efmsh372996eff5d91c0p183154jsn5c4d9eb754c7",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      successCallback(data);
    })
    .catch((err) => {
      console.log(err);
    }, []);
};
function CalculatorKcal() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [gender, setGender] = useState("female");
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(27);
  const [activityLevel, setActivityLevel] = useState("level_1");
  const [displayResult, setDisplayResult] = useState(false);
  const [isToogleColor, setIsToogleColor] = useState(true);
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmit] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const newFormErrors = [];
    setDisplayResult(true);
    if (
      age >= 1 ||
      age <= 80 ||
      age.length > 0 ||
      weight >= 40 ||
      weight <= 160 ||
      weight.length > 1 ||
      height >= 130 ||
      height <= 230 ||
      height.length === 0
    ) {
      setErrors([]);
    }

    if (age < 1 || age > 80 || age.length === 0) {
      setResult(false);
      newFormErrors.push(
        "Wiek musi być większy niż 1 rok oraz mniejszy niż 80 lat"
      );
    }
    if (weight < 40 || weight > 160 || weight.length === 0) {
      newFormErrors.push(
        "Waga nie może być mniejsza niż 40 kg oraz większa niż 160 kg"
      );
    }
    if (height < 130 || height > 230 || height.length === 0) {
      newFormErrors.push(
        "Wzrost nie może być mniejszy niż 130 cm oraz większy niż 230 cm"
      );
    }
    if (newFormErrors.length === 0) {
      getData(height, gender, age, weight, activityLevel, (data) => {
        function fixedNumber(number) {
          return number.toFixed(2);
        }
        setLoading(true);
        setResult(() => {
          return (
            <div className="calculation_information">
              <ul>
                <li>
                  Twoje zapotrzebowanie kaloryczne to: <br></br>
                  <span>{fixedNumber(data.data.goals["maintain weight"])}</span>
                </li>
                <li>
                  Jeśli chcesz zwiększyć masę ciała spożywaj: <br></br>
                  <span>
                    {" "}
                    {fixedNumber(data.data.goals["Weight gain"].calory)}
                  </span>
                </li>
                <li>
                  Jeśli chcesz zmniejszyć masę ciała spożywaj: <br></br>
                  <span>
                    {" "}
                    {fixedNumber(data.data.goals["Mild weight loss"].calory)}
                  </span>
                </li>
              </ul>
            </div>
          );
        });
        setDisplayResult(true);
      });
    } else {
      setErrors(newFormErrors);
      setDisplayResult(false);
    }
  };

  return (
    <div className="kcal" id="kcal">
      <form>
        <h1>Oblicz swoje zapotrzebowanie kaloryczne</h1>
        <div className="inputs_form">
          <KcalGender
            value={gender}
            setGender={setGender}
            setIsToogleColor={setIsToogleColor}
            gender={gender}
          ></KcalGender>
          <label>podaj wagę w kg </label>
          <KcalWeight value={weight} onInputClick={setWeight}></KcalWeight>
          <label>podaj wzrost w cm</label>
          <KcalHeight value={height} onInputClick={setHeight}></KcalHeight>
          <label>podaj swój wiek</label>
          <KcalAge value={age} onInputClick={setAge}></KcalAge>
          <label>Wybierz aktywność</label>
          <KcalActivityLevel
            value={activityLevel}
            onInputClick={setActivityLevel}
          ></KcalActivityLevel>
          {setErrors && <Errors errors={errors}></Errors>}
          <button className="result_calculation" onClick={submit}>
            Oblicz BMR
          </button>
          <h2>Wynik:</h2>
          {displayResult && <div className="list">{result}</div>}
        </div>
      </form>
    </div>
  );
}

export default CalculatorKcal;

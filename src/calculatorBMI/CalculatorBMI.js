import React, { useState } from "react";
import BmiAge from "./BmiAge";
import BmiHeight from "./BmiHeight";
import BmiWeight from "./BmiWeight";
import Errors from "../Errors";

function CalculatorBMI() {
  const [bmiAge, setBmiAge] = useState(27);
  const [bmiHeight, setBmiHeight] = useState(168);
  const [bmiWeight, setBmiWeight] = useState(63);
  const [resultBmi, setResultBmi] = useState(null);
  const [errorsBmi, setErrorsBmi] = useState([]);
  const [loadingBmi, setLoadingBmi] = useState(false);
  const [displayResultBmi, setDisplayResultBmi] = useState(false);

  const getBmiData = (bmiAge, bmiHeight, bmiWeight, successCallbackBmi) => {
    fetch(
      `https://fitness-calculator.p.rapidapi.com/bmi?age=${bmiAge}&weight=${bmiWeight}&height=${bmiHeight}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9bae93bed8msh680cb32959b04f9p161befjsnbc37383b4b2a",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        successCallbackBmi(data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };
  const submitBmi = (e) => {
    e.preventDefault();
    const newFormErrorsBmi = [];
    setLoadingBmi(true);

    if (
      bmiAge >= 1 ||
      bmiAge <= 80 ||
      bmiAge.length > 0 ||
      bmiWeight >= 40 ||
      bmiWeight <= 160 ||
      bmiWeight.length > 1 ||
      bmiHeight >= 130 ||
      bmiHeight <= 230 ||
      bmiHeight.length === 0
    ) {
      setErrorsBmi([]);
    }
    if (bmiHeight < 130 || bmiHeight > 230 || bmiHeight.length === 0) {
      newFormErrorsBmi.push(
        "Wzrost nie może być mniejszy niż 130 cm oraz większy niż 230 cm"
      );
    }
    if (bmiAge > 80 || bmiAge <= 0 || bmiAge.length === 0) {
      newFormErrorsBmi.push(
        "Wiek musi być większy niż 1 rok oraz mniejszy niż 80 lat"
      );
    }
    if (bmiWeight < 40 || bmiWeight > 160 || bmiWeight.length === 0) {
      newFormErrorsBmi.push(
        "Waga nie może być mniejsza niż 40 kg oraz większa niż 160 kg"
      );
    }

    if (newFormErrorsBmi.length === 0) {
      getBmiData(bmiAge, bmiHeight, bmiWeight, (data) => {
        const weightQuality = data.data.health;
        setLoadingBmi(false);
        function fixedNumber(number) {
          return number.toFixed(2);
        }
        function changeText() {
          if (weightQuality === "Normal") {
            return "Twoja waga jest prawidłowa";
          }
          if (weightQuality === "Overweight") {
            return "Twoja waga jest wysoka";
          }
          if (weightQuality === "Obese Class I") {
            return "Twoja waga jest wysoka";
          }
          if (weightQuality === "Obese Class II") {
            return "Twoja waga jest bardzo wysoka";
          }
          if (weightQuality === "Obese Class III") {
            return "Twoje życie jest zagrożone z powodu wysokiej wagi";
          }
          if (weightQuality === "Severe Thinness") {
            return "Twoja waga jest bardzo niska";
          }
          if (weightQuality === "Mild Thinness") {
            return "Twoja waga jest niska";
          }
        }
        setResultBmi(() => {
          return (
            <div className="calculation_information">
              <ul>
                <li>
                  Twoje BMI wynosi: <span>{fixedNumber(data.data.bmi)}</span>
                </li>
                <li>{changeText()}</li>
                <li>
                  Twoje BMI powinno wynosić:{" "}
                  <span>{data.data.healthy_bmi_range}</span>
                </li>
              </ul>
            </div>
          );
        });
        setDisplayResultBmi(true);
      });
    } else {
      setErrorsBmi(newFormErrorsBmi);
      setDisplayResultBmi(false);
    }
  };

  return (
    <div className="bmi" id="app_bmi">
      <form>
        <h1>Oblicz swoje BMI</h1>
        <div className="inputs_form">
          <label>Podaj swoją wagę w kg</label>
          <BmiAge value={bmiAge} onInputClick={setBmiAge}></BmiAge>
          <label>Podaj swoją wagę w kg</label>
          <BmiHeight value={bmiHeight} onInputClick={setBmiHeight}></BmiHeight>
          <label>Podaj swoją wagę w kg</label>
          <BmiWeight value={bmiWeight} onInputClick={setBmiWeight}></BmiWeight>
          {setErrorsBmi && <Errors errors={errorsBmi}></Errors>}
          <button className="result_calculation" onClick={submitBmi}>
            Oblicz BMI
          </button>
          <h2>Wynik:</h2>
          {displayResultBmi && <div className="list">{resultBmi}</div>}
        </div>
      </form>
    </div>
  );
}

export default CalculatorBMI;

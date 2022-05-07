import React from "react";
import CalculatorBMI from "./calculatorBMI/CalculatorBMI";
import CalculatorKcal from "./calculatorKcal/CalculatorKcal";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import HealthyEating from "./HealtyEating";
import DietitianVisit from "./DietitianVisit";
import Header from "./Header";
import Article from "./Article";

function App() {
  return (
    <>
      <Routes path="/">
        <Header></Header>
        <Article></Article>
      </Routes>
      <Routes>
        <Route path="/healthyeating">
          <HealthyEating></HealthyEating>
        </Route>
        <Route path="/dietitianvisit">
          <DietitianVisit></DietitianVisit>
        </Route>
        <Route path="/main">
          <section className="calculatorKcalBmi_section">
            <CalculatorKcal></CalculatorKcal>
            <CalculatorBMI></CalculatorBMI>
          </section>
        </Route>
      </Routes>
    </>
  );
}

export default App;

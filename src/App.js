import React, { Component, useState } from "react";
import CalculatorBMI from "./calculatorBMI/CalculatorBMI";
import CalculatorKcal from "./calculatorKcal/CalculatorKcal";
import { BrowserRouter as Routes, Route, Link, Switch } from "react-router-dom";
import HealthyEating from "./HealtyEating";
import DietitianVisit from "./DietitianVisit";
function App() {
  return (
    <>
      <Routes>
        <Route path="/healthyeating">
          <HealthyEating></HealthyEating>
        </Route>
        <Route path="/dietitianvisit">
          <DietitianVisit></DietitianVisit>
        </Route>
        <Route path="/main">
          <CalculatorKcal></CalculatorKcal>
          <CalculatorBMI></CalculatorBMI>
        </Route>
      </Routes>
    </>
  );
}

export default App;

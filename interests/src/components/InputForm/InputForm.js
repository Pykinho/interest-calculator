import { useState } from "react";
import classes from "./InputForm.module.css";

const InputForm = ({ onSaveInterestsData, onResetInterestsData }) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const handleCurrentSavings = (event) => {
    setCurrentSavings(event.target.value);
  };
  const handleYearlySavings = (event) => {
    setYearlySavings(event.target.value);
  };
  const handleExpectedInterest = (event) => {
    setExpectedInterest(event.target.value);
  };
  const handleInvestmentDuration = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    calculateHandler();
    onSaveInterestsData(yearlyData);
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
  };
  const yearlyData = [];

  const resetData = () => {
    onResetInterestsData();
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
  };

  const calculateHandler = () => {
    let currSavings = +currentSavings;
    const yearlyContribution = +yearlySavings;
    const expectedReturn = +expectedInterest / 100;
    const duration = +investmentDuration;
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currSavings * expectedReturn;
      currSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
      });
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={handleCurrentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={handleYearlySavings}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedInterest}
            onChange={handleExpectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={handleInvestmentDuration}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={resetData}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;

import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    date: new Date(2020, 7, 4),
    amount: "94.12",
  },
  {
    id: "e2",
    title: "New TV",
    date: new Date(2020, 5, 7),
    amount: "500",
  },
  {
    id: "e3",
    title: "Car Insurance",
    date: new Date(2021, 3, 21),
    amount: "120",
  },
  {
    id: "e4",
    title: "food",
    date: new Date(2022, 9, 4),
    amount: "50",
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses Items={expenses} />
    </div>
  );
};
export default App;

import React, { useEffect, useState } from "react";

import NewExpense from "./NewExpense/NewExpense";

import Expenses from "./Expenses/Expenses";
import "./Expensee.css";
import { useNavigate } from "react-router-dom";

let DUMMY_EXPENSE = [];
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("item")) {
      navigate("signup");
    }
  }, []);

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const fetchApp = () => {
    fetch("https://firstexpenseapp.herokuapp.com/taskget")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExpenses(data);
      });
  };
  useEffect(() => {
    fetchApp();
  }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
    fetch("https://firstexpenseapp.herokuapp.com/task", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-Type": "application/json",
      },
    }).then((response) => {
      fetchApp();
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;

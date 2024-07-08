import "./App.css";
import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;

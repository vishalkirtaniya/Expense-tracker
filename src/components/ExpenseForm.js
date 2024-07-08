import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ title, amount: parseFloat(amount), id: Date.now() });
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;

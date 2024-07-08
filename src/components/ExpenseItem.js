import React from "react";

function ExpenseItem({ expense }) {
  return (
    <li className="bg-gray-200 p-4 rounded shadow-md">
      <span className="block text-lg font-semibold">{expense.title}</span>
      <span className="block text-gray-700">${expense.amount.toFixed(2)}</span>
    </li>
  );
}

export default ExpenseItem;

import React from "react";

function ExpenseDate(expenses) {
  const month = expenses.date.toLocaleString("en-US", { month: "long" });
  const year = expenses.date.getFullYear();
  const day = expenses.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;

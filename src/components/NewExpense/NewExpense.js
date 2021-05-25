import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  };

  const startEditingHandler = () => {
    setAddExpense(true);
  };

  const stopEditingHandler = () => {
    setAddExpense(false);
  };

  return (
    <div className="new-expense">
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={stopEditingHandler}
        />
      )}
      {!addExpense && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;

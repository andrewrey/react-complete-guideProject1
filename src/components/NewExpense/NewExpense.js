import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [display, setDisplay] = useState(true);

  const displayChangeHandler = () => {
    setDisplay((prevState) => !prevState);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    displayChangeHandler();
  };
  return (
    <div className="new-expense">
      {display ? (
        <button onClick={displayChangeHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={displayChangeHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

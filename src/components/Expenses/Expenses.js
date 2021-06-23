import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredDate, setFilteredDate] = useState("2020");
  const dateFilterHandler = (selectedDate) => {
    setFilteredDate(selectedDate);
  };
  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredDate
  );

  let filteredContent = <p>No Expenses Found</p>;
  if (filteredExpenses.length > 0) {
    filteredContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onDateFilter={dateFilterHandler} date={filteredDate} />
        {filteredContent}
      </Card>
    </div>
  );
};

export default Expenses;

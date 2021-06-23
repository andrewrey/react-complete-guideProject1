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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onDateFilter={dateFilterHandler} date={filteredDate} />
        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredDate, setFilteredDate] = useState("2020");
  const dateFilterHandler = (selectedDate) => {
    setFilteredDate(selectedDate);
  };
  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredDate
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onDateFilter={dateFilterHandler} date={filteredDate} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "House Insurance",
      amount: 352.55,
      date: new Date(2021, 6, 21),
    },
    {
      id: "e2",
      title: "Morgage Payment",
      amount: 2355.33,
      date: new Date(2021, 6, 1),
    },
    {
      id: "e3",
      title: "Phone Bill",
      amount: 213.21,
      date: new Date(2021, 6, 19),
    },
    {
      id: "e4",
      title: "Electric Bill",
      amount: 91.5,
      date: new Date(2021, 6, 25),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

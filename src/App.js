import Expenses from "./components/Expenses/Expenses";

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
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

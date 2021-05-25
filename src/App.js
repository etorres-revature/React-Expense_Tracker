import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    { id: "e2", title: "new tv", amount: 1349.84, date: new Date(2021, 2, 28) },
    {
      id: "e3",
      title: "car insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "new wooden desk",
      amount: 325,
      date: new Date(2021, 2, 28),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

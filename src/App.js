import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "item1",
      title: "Sari Roti",
      amount: 6500,
      date: new Date(2020, 7, 14),
    },
    {
      id: "item2",
      title: "Martabak",
      amount: 50000,
      date: new Date(2021, 2, 12),
    },
    {
      id: "item3",
      title: "Fruit Tea",
      amount: 8000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "item4",
      title: "Mixue",
      amount: 16000,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Belajar ReactJS</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

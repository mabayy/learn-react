import "./ExpenseDate.css";

const ExpenseDate = (data) => {
  const day = data.date.toLocaleString("id-ID", { day: "2-digit" });
  const month = data.date.toLocaleString("id-ID", { month: "long" });
  const year = data.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;

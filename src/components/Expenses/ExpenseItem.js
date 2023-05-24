import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (data) => {
  // const [title, setTitle] = useState(data.title);

  // const clickHandler = () => {
  //   setTitle("Terupdate!");
  //   console.log(title);
  // };
  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={data.date} />
        <div className="expense-item__description">
          <h2>{data.title}</h2>
          <div className="expense-item__price">Rp.{addCommas(data.amount)}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;

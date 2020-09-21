import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.context";
import "../App.css";

const IncomeExpenseBox = () => {
  let positiveAmount = 0;
  let negativeAmount = 0;

  const { transactions } = useContext(TransactionContext);

  transactions.map((transaction) =>
    transaction.amount > 0
      ? (positiveAmount += transaction.amount)
      : (negativeAmount += transaction.amount)
  );

  return (
    <div className="incomeexpensebox">
      <div className="incomebox">
        Income <br />
        <br /> {positiveAmount}
      </div>
      <div className="expensebox">
        Expense <br />
        <br /> {negativeAmount}
      </div>
    </div>
  );
};

export default IncomeExpenseBox;

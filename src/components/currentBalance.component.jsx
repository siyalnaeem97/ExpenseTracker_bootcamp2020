import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.context";

const CurrentBalance = () => {
  let positiveAmount = 0;
  let negativeAmount = 0;

  const { transactions } = useContext(TransactionContext);

  transactions.map((transaction) =>
    transaction.amount > 0
      ? (positiveAmount += transaction.amount)
      : (negativeAmount += transaction.amount)
  );
  return (
    <div>
      <h3>Current Balance</h3>
      <h1>{positiveAmount + negativeAmount}</h1>
    </div>
  );
};

export default CurrentBalance;

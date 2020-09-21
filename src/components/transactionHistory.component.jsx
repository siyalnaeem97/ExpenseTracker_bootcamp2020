import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.context";
import Transaction from "./Transaction.component";

const TransactionHistory = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div>
      <h3>Transaction History</h3>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionHistory;

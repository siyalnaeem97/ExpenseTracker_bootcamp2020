import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.context";
import "../App.css";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";
  const { delTransaction } = useContext(TransactionContext);
  return (
    <div className="transactionList">
      <li className={transaction.amount > 0 ? "money plus" : "money minus"}>
        {transaction.desc}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
      </li>
      <button
        className="btnRemoveTransaction"
        onClick={() => delTransaction(transaction.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default Transaction;

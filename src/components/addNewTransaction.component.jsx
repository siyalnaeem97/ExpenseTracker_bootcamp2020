import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext.context";
import TransactionInput from "./transactionInput.component";

const AddNewTransaction = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(TransactionContext);

  const addDesc = (e) => {
    setDesc(e.target.value);
  };
  const addAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const addTrans = (e) => {
    e.preventDefault();
    addTransaction({
      desc: desc,
      amount: amount,
      id: Date.now(),
    });
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={addTrans}>
        <label htmlFor="description">Description</label>
        <br />
        <TransactionInput
          type="text"
          name="description"
          value={desc}
          placeholder="Description"
          onchange={addDesc}
        />
        <br />
        <label htmlFor="amount">Amount</label>
        <br />
        <TransactionInput
          type="number"
          name="amount"
          value={amount}
          placeholder="Amount"
          onchange={addAmount}
        />
        <br />
        <button className="btnAddTransaction">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddNewTransaction;

import React from "react";
import "../App.css";

const TransactionInput = (props) => {
  return (
    <input
      className="transactionInput"
      type={props.type}
      value={props.value}
      name={props.name}
      // placeholder={props.placeholder}
      onChange={props.onchange}
      autoComplete="off"
    />
  );
};

export default TransactionInput;

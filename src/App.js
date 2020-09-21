import React from "react";
import "./App.css";
import AddNewTransaction from "./components/addNewTransaction.component";
import CurrentBalance from "./components/currentBalance.component";
import IncomeExpenseBox from "./components/incomeExpenseBox.component";
import TransactionHistory from "./components/transactionHistory.component";
import { TransactionProvider } from "./context/TransactionContext.context";

function App() {
  return (
    <div>
      <h1>Expense Tracker by Naeem Ali</h1>
      <div className="container">
        <TransactionProvider>
          <CurrentBalance />
          <IncomeExpenseBox />
          <TransactionHistory />
          <AddNewTransaction />
        </TransactionProvider>
      </div>
    </div>
  );
}

export default App;

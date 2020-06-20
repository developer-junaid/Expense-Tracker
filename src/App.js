import React from "react";
import Child from "./Child";
import { TransactionProvider } from "./TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;

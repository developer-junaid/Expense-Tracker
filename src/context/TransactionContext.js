import React, { createContext, useReducer } from "react"
import TransactionReducer from "../functions/TransactionReducer"

// Make an array of transaction objects
const initialTransactions = []

// Create the context and export it
export const TransactionContext = createContext(initialTransactions)

// Create provider
export const TransactionProvider = ({ children }) => {
  // Use Reducer
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

  //Function  Add transaction
  function addTransaction(transactionObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        text: transactionObj.text,
        amount: transactionObj.amount,
      },
    })
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

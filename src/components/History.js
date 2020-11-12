import React, { useContext, useState } from "react"
import "./../styles/css/history.css"
import { TransactionContext } from "./../context/TransactionContext"

const History = () => {
  let { transactions } = useContext(TransactionContext)

  return (
    <div className="history-container">
      <div className="history-card">
        <div className="list">
          <ul className="history-list">
            {/* Include values from transactions array from context*/}
            {transactions.map((transaction, index) => {
              return (
                <li
                  className={transaction.amount > 0 ? "incomeItem" : "expenseItem"}
                  key={index}
                >
                  <span>{transaction.text}</span>
                  <span>${transaction.amount}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="heading">
          <h3>History</h3>
        </div>
      </div>
    </div>
  )
}

export default History

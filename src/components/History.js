import React, { useContext } from "react"
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
              // Income and expense list item logic
              let listClass = transaction.amount > 0

              return (
                <li className={listClass ? "income-item" : "expense-item"} key={index}>
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

import React from "react"
import "./../styles/css/history.css"

const History = ({ transactions }) => {
  return (
    <div className="history-container">
      {/* History */}
      <section>
        <h3>History</h3>
        <hr />
        <ul className="history-list">
          {/* Include values from transactions array from context
          {transactions.map((transaction, index) => (
            <li key={index}>
              <span>{transaction.text}</span>
              <span>${transaction.amount}</span>
            </li>
          ))} */}

          {/* {transactions.map((transaction, index) => ( */}
          <li>
            <span>pizza</span>
            <span>$20</span>
          </li>
          <li>
            <span>pizza</span>
            <span>$20</span>
          </li>
          <li>
            <span>pizza</span>
            <span>$20</span>
          </li>
          <li>
            <span>pizza</span>
            <span>$20</span>
          </li>
          {/* ))} */}
        </ul>
      </section>
    </div>
  )
}

export default History

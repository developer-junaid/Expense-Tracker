import React from "react"
import "./../styles/css/balance.css"

const Balance = () => {
  return (
    <div className="balance-container">
      <h3>Current Balance : $1000</h3>

      <div className="income-expense-container">
        <h4>
          Income <br /> $200
        </h4>
        <h4>
          Expense <br /> $400
        </h4>
      </div>

      {/* Add Transaction */}

      <h3>Add New Transaction</h3>
      <hr />

      {/* FORM */}
      <form className="transaction-form">
        <label>
          Text
          <input required type="text" placeholder="Enter text..." />
        </label>
        <br />

        <label>
          <span className="label">Amount</span>
          <input required type="number" placeholder="Enter amount..." />
        </label>

        <br />
        <div className="buttons-section">
          <button className="submit-btn" type="submit">
            Add Income
          </button>
          <button className="submit-btn" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  )
}

export default Balance

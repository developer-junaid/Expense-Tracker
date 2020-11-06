import React from "react"
import "./../styles/css/input.css"

const Input = () => {
  return (
    <div className="input-container">
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

export default Input

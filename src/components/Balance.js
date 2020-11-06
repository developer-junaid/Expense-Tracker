import React from "react"
import "./../styles/css/balance.css"

const Balance = () => {
  return (
    <div className="balance-container">
      <h3 className="balance-heading">
        Current Balance : <span className="dollar">$1000</span>
      </h3>

      <div className="income-expense-container">
        <h4>
          Income <br /> <span className="dollar">$200</span>
        </h4>
        <h4>
          Expense <br /> <span className="dollar">$400</span>
        </h4>
      </div>

      <form className="transaction-form">
        <label>Text </label>
        <input required type="text" placeholder="Enter text..." />

        <label>Amount</label>
        <input required type="number" placeholder="Enter amount..." />
        <br />
        <div className="buttons-section">
          <button className="submit-btn add-income-btn" type="submit">
            Add Income
          </button>
          <button className="submit-btn add-expense-btn" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  )
}

export default Balance

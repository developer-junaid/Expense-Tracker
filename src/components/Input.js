import React from "react"
import "./../styles/css/input.css"

const Input = () => {
  return (
    <div className="input-container">
      {/* Add Transaction */}
      <section>
        <h3>Add New Transaction</h3>
        <hr />

        {/* FORM */}
        <form className="transaction-form">
          <label>
            <span className="label">Text</span>
            <br />
            <input required type="text" placeholder="Enter text..." />
          </label>

          <br />
          <br />

          <label>
            <span className="label">Amount</span>
            <br />
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
      </section>
    </div>
  )
}

export default Input

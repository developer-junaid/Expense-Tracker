import React from "react"
import "./../styles/css/balance.css"

const Balance = () => {
  return (
    <div className="balance-container">
      <div className="balance">
        <h3>Current Balance : $1000</h3>
      </div>
      <div className="income-expense-container">
        <h4>Income <br />  $200</h4>
        <h4>Expense <br /> $400</h4>
      </div>
    </div>
  )
}

export default Balance

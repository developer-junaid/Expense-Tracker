import React, { useContext, useState } from "react"
import "./../styles/css/balance.css"
import { TransactionContext } from "./../context/TransactionContext"

const Balance = () => {
  let { transactions, addTransaction } = useContext(TransactionContext)
  const [newText, setText] = useState("")
  var [newAmount, setAmount] = useState("")

  // Transaction addition handler function
  const additionHandler = () => {
    // If 0 is entered
    if (Number(newAmount) === 0) {
      alert("Please give an amount !")
      return false
    }

    addTransaction({
      amount: Number(newAmount),
      text: newText,
    })

    setText("")
    setAmount("")
  }

  const expenseHandler = (event) => {
    event.preventDefault()
    if (newAmount < 0) {
      alert("You can't enter negative value")
      setAmount("")
      setText("")
      return false
    }
    newAmount *= -1
    setAmount(newAmount)
    additionHandler()
  }

  const incomeHandler = (event) => {
    event.preventDefault()
    if (newAmount < 0) {
      alert("You can't enter negative value")
      setAmount("")
      setText("")
      return false
    }
    setAmount(newAmount)
    additionHandler()
  }

  // Function to calculate total income
  const getIncome = () => {
    let income = 0
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income += transactions[i].amount
    }
    return income
  }

  // Function to calculate total income
  const getExpense = () => {
    let expense = 0
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount
    }
    return expense
  }

  return (
    <div className="balance-container">
      <h3 className="balance-heading">
        Current Balance :{" "}
        <span className="dollar">${getIncome() + getExpense()}</span>
      </h3>

      <div className="income-expense-container">
        <h4>
          Income <br /> <span className="dollar">${getIncome()}</span>
        </h4>
        <h4>
          Expense <br /> <span className="dollar">${getExpense()}</span>
        </h4>
      </div>

      <form className="transaction-form">
        <label>Text </label>
        <input
          required
          type="text"
          placeholder="Enter text..."
          onChange={(event) => setText(event.target.value)}
          value={newText}
        />

        <label>Amount</label>
        <input
          required
          type="number"
          placeholder="Enter amount..."
          onChange={(event) => setAmount(event.target.value)}
          value={newAmount}
        />
        <br />
        <div className="buttons-section">
          <button
            className="submit-btn add-income-btn"
            type="submit"
            onClick={incomeHandler}
          >
            Add Income
          </button>
          <button
            className="submit-btn add-expense-btn"
            type="submit"
            onClick={expenseHandler}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  )
}

export default Balance

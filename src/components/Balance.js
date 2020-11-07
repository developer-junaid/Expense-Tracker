import React, { useContext, useState } from "react"
import "./../styles/css/balance.css"
import { TransactionContext } from "./../context/TransactionContext"

const Balance = () => {
  let { transactions, addTransaction } = useContext(TransactionContext)
  const [newText, setText] = useState("")
  let [newAmount, setAmount] = useState("")

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
      <h1 className="balance-heading">
        Current Balance : <span>${getIncome() + getExpense()}</span>
      </h1>

      <div className="income-expense-container">
        <h2 className="income">
          Income <br /> <span>${getIncome()}</span>
        </h2>
        <h2 className="expense">
          Expense <br /> <span className="dollar">${getExpense()}</span>
        </h2>
      </div>

      <form className="transaction-form">
        <label htmlFor="text">Text </label>
        <input
          id="text"
          autoFocus
          required
          type="text"
          placeholder="Enter text..."
          onChange={(event) => setText(event.target.value)}
          value={newText}
        />

        <label htmlFor="amount">Amount</label>
        <input
          required
          id="amount"
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

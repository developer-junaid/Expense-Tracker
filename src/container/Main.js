import React from "react"
import Header from "../components/Header"
import { TransactionProvider } from "../context/TransactionContext"
import "./Main.css"

const Main = () => {
  return (
    <div className="main">
      <TransactionProvider>
        <Header />
      </TransactionProvider>
    </div>
  )
}

export default Main

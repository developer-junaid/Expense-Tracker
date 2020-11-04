import React from "react"
import Header from "../components/Header"
import Balance from "../components/Balance"
import History from "../components/History"
import Input from "../components/Input"
import Footer from "../components/Footer"
import { TransactionProvider } from "../context/TransactionContext"
import "./../styles/css/main.css"

const Main = () => {
  return (
    <div className="main">
      <TransactionProvider>
        <Header />
        <Balance />
        <History />
        <Input />
        <Footer />
      </TransactionProvider>
    </div>
  )
}

export default Main

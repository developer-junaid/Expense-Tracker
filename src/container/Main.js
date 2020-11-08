import React, { Suspense, lazy } from "react"
import Header from "../components/Header"
import Balance from "../components/Balance"
import History from "../components/History"
// import Footer from "../components/Footer"
import { TransactionProvider } from "../context/TransactionContext"
import "./../styles/css/main.css"

const Footer = lazy(() => import("../components/Footer"))

const Main = () => {
  return (
    <div className="main">
      <TransactionProvider>
        <Header />
        <Balance />
        <History />
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      </TransactionProvider>
    </div>
  )
}

export default Main

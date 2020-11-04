import React from "react"
import Child from "./components/Child"
import { TransactionProvider } from "./context/TransactionContext"
import firebase from "./firebase"

function App() {
  // Firebase Messaging
  const messaging = firebase.messaging()
  messaging
    .requestPermission()
    .then(() => messaging.getToken())
    .then((token) => {
      prompt("token", token)
    })
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  )
}

export default App

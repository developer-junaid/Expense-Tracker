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
      console.log("token", token)
    })
  return (
    <div>Appjs</div>
    // <TransactionProvider>
    //   <Child />
    // </TransactionProvider>
  )
}

export default App

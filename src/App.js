import React from "react"
import Main from "./container/Main"
import firebase from "./firebase"

function App() {
  // Firebase Messaging
  const messaging = firebase.messaging()
  messaging
    .requestPermission()
    .then(() => messaging.getToken())
    .then((token) => {
      // prompt("token", token)
    })

  return <Main />
}

export default App

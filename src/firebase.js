import firebase from "firebase"

const config = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyCxuTNyNpSxLqo6ql62No1eP7dOSevStYQ",
  authDomain: "expense-tracker-a2e65.firebaseapp.com",
  databaseURL: "https://expense-tracker-a2e65.firebaseio.com",
  projectId: "expense-tracker-a2e65",
  storageBucket: "expense-tracker-a2e65.appspot.com",
  messagingSenderId: "900401860429",
  appId: "1:900401860429:web:c189f04ca14fe419e23104",
}

firebase.initializeApp(config)

export default firebase

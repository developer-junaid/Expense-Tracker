import firebase from "firebase"

const config = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyBzE0c-vSuFtTSg9jrQJNIDZmMSs2kzKfs",
  authDomain: "your-expense-tracker.firebaseapp.com",
  databaseURL: "https://your-expense-tracker.firebaseio.com",
  projectId: "your-expense-tracker",
  storageBucket: "your-expense-tracker.appspot.com",
  messagingSenderId: "676487835336",
  appId: "1:676487835336:web:8ad4dd941cd8a67f97bffd",
}

firebase.initializeApp(config)

export default firebase

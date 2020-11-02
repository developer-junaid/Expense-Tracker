import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// import serviceWorker from "./serviceWorker"

// Main Component
function Main() {
  return (
    <div>
      <App />
    </div>
  )
}

ReactDOM.render(<Main />, document.querySelector("#root"))

// Service worker for making it PWA
// serviceWorker()

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import swDev from "./swDev"
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
swDev()

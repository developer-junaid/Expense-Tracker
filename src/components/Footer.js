import React from "react"
import "./../styles/css/footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <h3>Developed by: Junaid Qureshi</h3>
      <div className="icons-container">
        <a title='github' href="https://github.com/qjunaid623/" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-github-square "></i>
        </a>
        <a title='facebook' href="https://facebook.com/developer-junaid" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-facebook-square "></i>
        </a>
        <a title='linkedin' href="https://www.linkedin.com/in/developer-junaid/" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-linkedin "></i>
        </a>
        <a title='twitter' href="https://twitter.com/Junaid084869/" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-twitter-square "></i>
        </a>
      </div>
    </div>
  )
}

export default Footer

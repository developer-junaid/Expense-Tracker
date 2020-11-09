import React from "react"
import "./../styles/css/footer.css"
import portfolioImage from './../images/portfolio.svg'
import gmailImage from './../images/gmail.svg'
import twitterImage from './../images/twitter.svg'
import linkedinImage from './../images/linkedin.svg'
import facebookImage from './../images/fb.svg'
import githubImage from './../images/github.svg'


const Footer = () => {
  return (
    <div className="footer-container">
      <h3>Developed by: Junaid Qureshi</h3>

      <div className="icons-container">
        <a title='portfolio' href="http://junaid-qureshi.surge.sh/" rel="noopener noreferrer" target="_blank">
          <img src={portfolioImage} alt="portfolio" />
        </a>&nbsp;
        <a title='github' href="https://github.com/qjunaid623/" rel="noopener noreferrer" target="_blank">
          <img src={githubImage} alt="github" />
        </a>
        <a title='facebook' href="https://www.facebook.com/profile.php?id=100041078220896" rel="noopener noreferrer" target="_blank">
          <img src={facebookImage} alt="facebook" />
        </a>
        <a title='linkedin' href="https://www.linkedin.com/in/developer-junaid/" rel="noopener noreferrer" target="_blank">
          <img src={linkedinImage} alt="linkedin" />
        </a>
        <a title='twitter' href="https://twitter.com/Junaid084869/" rel="noopener noreferrer" target="_blank">
          <img src={twitterImage} alt="twitter" />
        </a>
        <a title='gmail' href="mailto:qjunaid623@gmail.com" rel="noopener noreferrer" target="_blank">
          <img src={gmailImage} alt="gmail" />
        </a>

      </div>


    </div>
  )
}

export default Footer

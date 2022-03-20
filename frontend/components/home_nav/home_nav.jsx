import React from "react"
import { Link} from "react-router-dom"
import login_form_container from "../session_form/login_form_container"



const HomeNav = () => {
  return(
    <div id="home-nav">
    <p id="site-name"> Cacophony </p>
    <div id="home-nav-links"> 
    <a className = "link" href="https://github.com/CodyDegraffeNiles"  target="_blank"> Github </a>
    <a  className = "link" href="#" target="_blank">LinkedIn</a>
    </div>
    <div id = "login">
    <Link to ="/login">Login</Link>
    </div>

    </div>

  )
}


export default HomeNav
import React from "react"
import { Link } from "react-router-dom"

const HomeBody = () => {
  return(
    <div>
      <div id="first-div"> 
        <img id="first-home-image"></img>
        <div id="imagine-message">
          <h1 id="imagine-header">IMAGINE A PLACE...</h1>
          <p id="imagine-text">...where you can belong to a school club, a gaming group, 
          or a worldwide art community. 
          Where just you and a handful of friends can spend time together. 
          A place that makes it easy to talk every day and hang out more often.
          </p>
          <Link to="/signup"> Don't Just Imagine. Signup!</Link>
        </div>
      </div>
    </div>
  )
}






export default HomeBody
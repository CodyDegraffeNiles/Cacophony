import React from "react"
import { Link } from "react-router-dom"

const HomeBody = () => {
  return(
    <div id="home">
      <div id="first-div"> 
        {/* <img id="first-home-image"></img> */}
        <div id="imagine-message">
          <h2 id="imagine-header">IMAGINE A PLACE...</h2>
          <p id="imagine-text">...where you can belong to a school club, a gaming group, 
          or a worldwide art community. 
          Where just you and a handful of friends can spend time together. 
          A place that makes it easy to talk every day and hang out more often.
          </p>
          <Link to="/signup"> Don't Just Imagine. Signup!</Link>
        </div>
      </div>
      <div id= "second-div">
        <img id="second-div-image"/> 
        <div id="second-div-message"> 
          <h2 id="second-div-header"> Create an invite-only place where you belong</h2>
          <p id="second-div-body">
            Cacophony servers are organized into topic-based channels where you can 
            collaborate, share, and just talk about your day without clogging 
            up a group chat.
          </p>
        </div> 
      </div>
    </div>
  )
}






export default HomeBody
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
          <Link to="/signup">Don't Just Imagine. Signup!</Link>
        </div>
      </div>
      <div className="white-div">
        <img className="white-div-image-one"/> 
        <div className="white-div-message"> 
          <h2 className="white-div-header">Create a place where you belong</h2>
          <p className="white-div-body">
            Cacophony servers are organized into topic-based channels where you can 
            collaborate, share, and just talk about your day without clogging 
            up a group chat.
          </p>
        </div> 
      </div>
      <div className="grey-div"> 
        <div className="white-div-message"> 
          <h2 className="white-div-header"> Where hanging out is easy</h2>
          <p className="white-div-body">
            Real time messasging both in servers and direct messages. You can message
            any fellow server member with a click of a button. 
          </p>
        </div> 
        <img className="grey-div-image-one"/> 
      </div>
      <div className="white-div"> 
        <img className="white-div-image-two"/> 
        <div className="white-div-message"> 
          <h2 className="white-div-header"> From few to a fandom</h2>
          <p className="white-div-body">
            Get any community up and running with public or private servers as well 
            as search public servers for the perfect fit.
          </p>
        </div> 
      </div>
      <div className="grey-sign-up-div">
        <div id="sign-up-items"> 
          <h2 className="sign-up-div-header"> Ready to start your journey?</h2>
          <Link to="/signup"> Open Cacophony in the Browser!</Link>
        </div>
      </div>
    </div>
  )
}






export default HomeBody
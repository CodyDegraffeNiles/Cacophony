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
      <div className="white-div">
        <img className="white-div-image-one"/> 
        <div className="white-div-message"> 
          <h2 className="white-div-header"> Create an invite-only place where you belong</h2>
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
            Grab a seat in a voice channel when you're free. 
            Friends in your server can see you're around and instantly pop in to
            talk without having to call.
          </p>
        </div> 
        <img className="grey-div-image-one"/> 
      </div>
      <div className="white-div"> 
        <img className="white-div-image-two"/> 
        <div className="white-div-message"> 
          <h2 className="white-div-header"> From few to a fandom</h2>
          <p className="white-div-body">
            Get any community running with moderation tools and custom member access. 
            Give members special powers, set up private channels, and more.
          </p>
        </div> 
      </div>
    </div>
  )
}






export default HomeBody
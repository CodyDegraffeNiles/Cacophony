import React from "react";
import { Link } from "react-router-dom";
import CreateServerForm from "../server_from/create_server_form_container";

class UserNav extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return ( 
      <div id = "user-nav">
      <div id ="username">
      <h2>{this.props.currentUser.username}</h2>
      <p>#{this.props.currentUser.numberTag}</p>
      </div>
      <div id="setting-icons">
        <i className="fa-solid fa-microphone"> </i>
        <i className="fa-solid fa-headphones"> </i>
        <Link to={`/users/${this.props.currentUser.id}`}> <i className="fa-solid fa-gear"/></Link>
      </div>
      </div>
    )
  }
}

export default UserNav;
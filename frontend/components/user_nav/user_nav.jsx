import React from "react";
import { Link } from "react-router-dom";



class UserNav extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const display = this.props.currentUser ? (
    <div>
      <h2> {this.props.currentUser.username}#{this.props.currentUser.nameTag}</h2>
      <button onClick={() => this.props.logout()}> LogOut</button>
    </div> ) : (
      <div>
      <Link to = '/signup'> Signup </Link>
      <Link to = '/login'> Login </Link>
    </div>
    );

    return (
      display
    )
  }
}

export default UserNav;
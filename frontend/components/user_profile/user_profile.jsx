import React from "react"
import {Link} from 'react-router-dom'

class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    if(this.props.user.email === "KoalaDemo2@caveman.com") {return}
    this.props.update(this.state);
    // Send back to homepage
    this.props.history.push("/servers/@me")
  }

  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
  }

  // Modify delete button to do nothing if demo-user is loged in"


  render(){
   // Modify delete button to do nothing if demo-user is loged in"
    const deleteButton = this.props.user.email === "KoalaDemo2@caveman.com" ? <button id ="delete-user"> 
      Delete Account (Disabled for Demo)</button> : 
    <button id ="delete-user" onClick={() => this.props.delete(this.props.user.id)}>Delete Account</button>
  
    // modify message on button for demo-user i
    const updateMessage = this.props.user.email === "KoalaDemo2@caveman.com" ? 
    "Update User (Disabled for Demo)" : "Update User"
    return(
      <div id = "user-profile">
      <div id="user-side-nav"> 
        <ul id="user-side-nav-list">
          <Link to={`/users/${this.props.user.id}`}> 
            <li className = "user-side-nav-item">My Account</li>
          </Link>
          <Link to={`/servers/@me`}> 
            <li className = "user-side-nav-item">My Direct Messages</li>
          </Link>
          <li className = "user-side-nav-item" onClick={() => this.props.logout()}> 
            <span>Log Out</span>
              <i className="fa-solid fa-arrow-right"></i>
          </li>
        </ul>
      </div>
        <div id="user-profile-header"> 
        <h3 id="my-account">My Account</h3>
          <div id="home-link">
            <Link id="esc-link" to="/servers/@me">
                <i className="fa-solid fa-xmark"/>
                <p id="esc">ESC</p>
            </Link> 
          </div>
        </div>
        <div id="user-profile-content">
          <div id="user-profile-dark-top"/> 

          <div id ="user-top-info"> 
            <div className={`user-icon-profile color-${this.props.user.colorId}`}>
              <i className="fa-brands fa-discord"/>
              </div>
            <div id="user-fullname"> 
              <h4>{this.props.user.username}</h4> 
              <span>#{this.props.user.numberTag}</span>
            </div>
          </div>

          <div id="user-info"> 
            <div id="user-username"> 
              <p> Username </p> 
              <div id="actual-info"> 
                <p>{this.props.user.username}</p> 
                <span>#{this.props.user.numberTag}</span>
              </div>
            </div>
            <div id="user-email"> 
              <p>Email</p>
              <div id="actual-info">
                <p>{this.props.user.email}</p>
              </div>
            </div>
          </div>
          <div id="user-buttons">  
            <button id="update-user-button"> {updateMessage}</button>
            {deleteButton}
          </div>
          
          
          {/* <form id="user-update" onSubmit={this.handleSubmit}> 
            <p>Username </p>  
            <input  
            type = "text"
            value = {this.state.username}
            onChange ={this.handleChange('username')}/>
            <p> Email </p>
            <input 
            type="text"
            value = {this.state.email}
            onChange ={this.handleChange('email')}/>
            <button type="submit" id="update-user-button">{updateMessage}</button>
          </form>
          <div id = "leave-buttons">
            {deleteButton} */}
          {/* </div> */}
        </div>
      </div>

    )
  }
}




export default UserProfile;
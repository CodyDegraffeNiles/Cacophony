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
  }

  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
  }

  // Modify delete button to do nothing if demo-user is loged in"


  render(){
   // Modify delete button to do nothing if demo-user is loged in"
    const deleteButton = this.props.user.email === "KoalaDemo2@caveman.com" ? <button id ="delete-user"> 
      Delete Account(Disabled)</button> : 
    <button id ="delete-user" onClick={() => this.props.delete(this.props.user.id)}>Delete Account</button>
  
    return(
      <div>
      <div id="user-top"> 
      <h3> My Account</h3>
      <div id="esacpe"> 
      <Link id="home-link" to="/servers/@"><i className="fa-solid fa-xmark"/></Link> 
      <p>ESC</p>
      </div>
      </div>
      <form id="user-update" onSubmit={this.handleSubmit}> 
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
      <button type="submit" id="update-user-button">Update User</button>
      </form>
      {deleteButton}
      <button onClick={() => this.props.logout()}> LogOut</button>
        </div>

    )
  }
}




export default UserProfile;
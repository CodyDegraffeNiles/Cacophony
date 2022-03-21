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
    this.props.update(this.state);
  }

  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
  }

  render(){
    return(
      <div>
      <Link id="return-home" to="/">x</Link> 
      <form id="User-Update" onSubmit={this.handleSubmit}> 
        Email <input 
        type="text"
        value = {this.state.email}
        onChange ={this.handleChange('email')}/>
        Username <input  
        type = "text"
        value = {this.state.username}
        onChange ={this.handleChange('username')}/>
      <button type="submit" id="update-user">Update User</button>
      </form>
      <button id ="delete-user" onClick={() => this.props.delete(this.props.user.id)}>Delete Account</button>
      <button onClick={() => this.props.logout()}> LogOut</button>
        </div>

    )
  }
}




export default UserProfile;
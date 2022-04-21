
import React from "react"


class UserEditForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.user

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount(){
    this.props.removeErrors()
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
  }

  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
  }

  render(){
    // Set Username based on if errors exist
    let userName = this.props.errors.includes("Username can't be blank") ?
      <p id="channel-error-name"> USERNAME: CANNOT BE BLANK</p> :
      <p id="channel-form-name"> USERNAME</p>

    let email = this.props.errors.includes("Email can't be blank") ? 
      <p id ="channel-error-name"> EMAIL: CANNOT BE BLANK </p> 
      : this.props.errors.includes("Email has already been taken") 
      ? <p id ="channel-error-name"> EMAIL: HAS ALREADY BEEN TAKEN </p>
      :  <p id="channel-form-name"> EMAIL</p> 

    return (
      <div id="channel-form"> 
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <h5 id="user-edit-form-header">Edit User Credentials</h5>
          {userName}
            <div id ="channel-form-name-input-container">
              <input 
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange("username")}
              id ="channel-form-name-input"
              />
            </div>
          <br/>
          {email}
            <div id ="channel-form-name-input-container">
              <input 
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange("email")}
              id ="channel-form-name-input"
              />
            </div>
          <button type="submit" id="user-edit-submit">Done</button>
        </form>
      </div>
    )
  }
}

export default UserEditForm;

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
    return (
      <div id="channel-form"> 
        <form onSubmit={this.handleSubmit}>
          <h3>Edit User Credentials</h3>
            <div id ="channel-form-name-input-container">
              <input 
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange("username")}
              id ="channel-form-name-input"
              />
            </div>
            <div id ="channel-form-name-input-container">
              <input 
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange("email")}
              id ="channel-form-name-input"
              />
            </div>
          <button type="submit">Done</button>
        </form>
      </div>
    )
  }
}

export default UserEditForm;
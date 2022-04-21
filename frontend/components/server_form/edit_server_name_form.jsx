import React from "react";


class EditServerNameForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.server
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }
  
  // Handle Submission of the from for name edit

  handleSubmit(e){
    e.preventDefault();
    this.props.update(this.state);
  }

  // Handle changes in the name state

  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }
  
  render(){
    // Only render when user clicks the drop down menu next to server name
    if (this.props.noShow) {
      return null
    }

    let serverName  = this.props.errors.includes("Name can't be blank") ?
      <p id="channel-error-name"> Name cannot be blank</p> :
    <p id="channel-form-name"> Name </p>  ;

    if (this.props.errors.includes("Name has already been taken")){
      serverName = <p id="channel-error-name"> Name already being used </p> 
    }

    // Create different edit forms for the owner and a member
    return (
      <div id="server-name-form">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div id ="channel-form-header"> 
            <h5>Edit Server</h5>
          </div>
          {serverName}
          <div id ="channel-form-name-input-container">
            <input 
            autoFocus
            type="text"
            value={this.state.name}
            onChange={this.handleName("name")}
            id ="channel-form-name-input"
            />
          </div>
          <button type="submit" id="channel-edit-submit"> Update Server Name </button>
        </form>
      </div>
    )
  }
}

export default EditServerNameForm;
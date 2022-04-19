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

  componentDidUpdate(prevProps){
    if (prevProps !== this.props){
      this.setState({["name"]: this.props.server.name})
      this.setState({["id"]: this.props.server.id})
      this.setState({["owner_id"]: this.props.server.owner_id})
      this.setState({["public"]: this.props.server.public})
    }
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
      <span id="server-update-error"> Name cannot be blank</span> :
    "Name";

    if (this.props.errors.includes("Name has already been taken")){
      serverName = <span id="server-update-error"> Name already being used </span> 
    }

    // Create different edit forms for the owner and a member
    return (
      <div id="channel-form">
        <form onSubmit={this.handleSubmit}>
          <div id ="channel-form-header"> 
          <h5>Edit Server</h5>
          </div>
          {serverName}
          <input 
          autoFocus
          id= "edit-server-name"
          type="text"
          value={this.state.name}
          onChange={this.handleName("name")}
          /> 
        <button type="submit"> Update Server Name </button>
        </form>
      </div>
    )
  }
}

export default EditServerNameForm;
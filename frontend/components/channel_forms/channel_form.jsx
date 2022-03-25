import React from "react";

class ChannelForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.channelName,
      server_id: this.props.serverId,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Set Proper State for Edit Form
  componentDidMount(){
    if(this.props.formType === "Update Channel"){this.setState({['id']: this.props.channelId})}
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }


  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }

  render(){
    // Placeholder based on form
    const placeholder = this.props.formType === "Update Channel" ? 
    this.props.name : "new-channel"
    // Form Message Based on Create or Editing Channel
    const formMessage = this.props.formType === "Update Channel" ? 
      <div id ="channel-form-header"> 
        <h5>Edit Channel</h5>
        <p> In {this.props.serverName}</p>
      </div>
      : 
      <div id ="channel-form-header"> 
      <h5>Create A Channel</h5>
      <p> In {this.props.serverName}</p>
      </div>
    // Delete Button if Create Channel"
    const deleteButton = this.props.formType === "Update Channel" ?
    <form onSubmit={() => this.props.deleteChannel(this.props.channelId)}>
      <button id="channel-delete-button" type="submit"> Delete Channel</button>
      </form>
    : null;
    return (
    <div id="channel-form"> 
      <form onSubmit={this.handleSubmit}>
        {formMessage}
          <p id="channel-form-name"> CHANNEL NAME</p>
          <div id ="channel-form-name-input-container">
          <i className="fa-solid fa-hashtag fa-sm"></i>
          <input 
          type="text"
          value={this.state.name}
          onChange={this.handleName("name")}
          id ="channel-form-name-input"
          placeholder={placeholder}
          />
          </div>
          <button id='channel-edit-submit' type="submit">{this.props.formType }</button>
      </form>
      {deleteButton}
    </div>)
  }
}


export default ChannelForm;
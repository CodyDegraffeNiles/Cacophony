import React from "react";

class ChannelForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.channelName,
      server_id: this.props.serverId,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Set Proper State for Edit Form
  componentDidMount(){
    if(this.props.formType === "Update Channel"){this.setState({['id']: this.props.channelId})}
  }

  handleSubmit(e){
    let that = this;
    e.preventDefault();
    // Push to New Channel
    if(this.props.formType === "Create Channel"){
    this.props.action(this.state).then(function(action){
      let channel = action.payload.channel
      return that.props.history.push(`/servers/${that.state.server_id}/${channel.id}`)
      })
    } else {
      // Stay at current location for simply updating a channel.
      this.props.action(this.state);
    }
    ;
  }


  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }

  handleDelete(channelId){
    let that = this;
    this.props.deleteChannel(channelId).then(
      function(response){
        if(response.payload.toString() === that.props.currentChannelId){
          that.props.history.push(`/servers/${that.props.serverId}/${that.props.firstChannelId}`)
        }
      }
    )
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
    <form onSubmit={() => this.handleDelete(this.props.channelId)}>
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
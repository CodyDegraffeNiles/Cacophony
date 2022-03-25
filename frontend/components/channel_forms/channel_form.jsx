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
    console.log(this.state)
    this.props.action(this.state);
  }


  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }

  render(){
    // Form Message Based on Create or Editing Channel
    const formMessage = this.props.formType === "Update Channel" ? <p>
      Edit Channel </p> : <p>Create Channel</p>
    // Delete Button if Create Channel"
    const deleteButton = this.props.formType === "Update Channel" ? 
    <button onClick={() => this.props.deleteChannel(this.props.channelId)}>
      Delete Channel</button>
    : null;
    return (
    <div id="channel-form"> 
      <form onSubmit={this.handleSubmit}>
        {formMessage}
          <h5 id="channel-form-name"> Channel Name</h5>
          <input 
          type="text"
          value={this.state.name}
          onChange={this.handleName("name")}
          />
          <button id='create-server' type="submit">{this.props.formType }</button>
      </form>
      {deleteButton}
    </div>)
  }
}


export default ChannelForm;
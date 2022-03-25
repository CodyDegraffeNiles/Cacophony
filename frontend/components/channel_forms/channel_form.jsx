import React from "react";

class ChannelForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.channel.name,
      server_id: this.props.channel.serverId,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }


  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }

  render(){
    let formMessage = this.props.formType === "Update Channel" ? <p>
      Create Channel </p> : <p>Edit Channel</p>
    let test = "Form.type"
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
          <button id='create-server' type="submit">{this.props.formType}</button>
      </form>
    </div>)
  }
}


export default ChannelForm;
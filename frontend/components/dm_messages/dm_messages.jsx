import React from 'react'
import Message from '../channel_messages/message'
import {createConsumer} from "@rails/actioncable"


class DmMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newMessage: this.props.message, 
      dmMessages : this.props.dmMessages,
      dmMessagesIds : this.props.dmMessagesIds
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.subscription = ""
  }

  componentDidMount(){
    this.props.fetchDmServer();
  }

  componentDidUpdate(prevProps){
  if (prevProps.dmMessagesIds.length !== this.props.dmMessagesIds.length)
    {
      let dmMessages = this.props.dmMessages;
      let dmMessagesIds = this.props.dmMessagesIds;
      this.setState({dmMessages})
      this.setState({dmMessagesIds})
    }
  }
  
  handleChange(){
    let that = this 
    return function(e){
      let modMessage = that.state.newMessage;
      modMessage.body = e.target.value;
      that.setState({["newMessage"] : modMessage})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.action(this.state["newMessage"]);
    // Clear Input after Submission
    let newMessage = this.state.newMessage;
    newMessage.body = "";
    this.setState({["newMessage"]: newMessage})
  }


  render(){
    let otherUsername = this.props.otherUser ? this.props.otherUser.username: null;
    let messages = Object.values(this.state.dmMessages)
    return(
      <div id="dm-messages">
        <div id="dm-header"> 
          <i className="fa-solid fa-at" id="dm-message-at"></i>
          <h5 id="channel-name">{otherUsername} </h5>
        </div>
        <br/> 
        <ul id="dm-actual-messages"> 
          {messages.map( (message) => {
            return (
              <Message
                key = {message.id}
                message = {message}
                currentUserId = {this.props.currentUserId}
                dm={true}
                />
                )
            })
          }
        </ul>

        <div id= "dm-message-footer-bar">
          <form autoComplete="off" id= "dm-message-form" onSubmit={this.handleSubmit}> 
            <span className="server-message-input-padding">"</span>
            <input
            type = "text"
            value = {this.state.newMessage.body}
            onChange={this.handleChange('body')}
            className="dm-message-input"
            placeholder={`Message @${otherUsername}`}
          />
          <button className="dm-message-submit-button"type="submit"> <i className="fa-solid fa-paper-plane fa-xl"/></button>
          </form>
        </div>
      </div>
    )
  }
}

export default DmMessages;
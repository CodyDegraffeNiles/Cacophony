import React from 'react'
import Message from './message'
import { createConsumer } from "@rails/actioncable"

class ChannelMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newMessage: this.props.message, 
      messages : []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.subscription = ""
  }

  componentDidMount(){
    this.props.fetchChannel();

    // Set Up listening post/subscription once user mounts
    let that = this;
    const handlers = {
      received(data){
        // Find Author name to add to Message
        data.authorName = that.props.members[data.author_id].username;
        // Mutate time stamp to match time stamps from backend
        let timestamp = new Date(data.created_at)
        let time = timestamp.toLocaleTimeString();
        let date = timestamp.toLocaleDateString();
        data.createdAt = date + " " + time 
        that.setState({["messages"] : that.state.messages.concat([data])})
      }
    }
    const cable = createConsumer("ws://localhost:3000/cable")
    const ParamsToSend = {
      channel: "ServerChannel",
      id: this.props.message.channel_id
    }
    this.subscription = cable.subscriptions.create(ParamsToSend, handlers)
  }

  componentWillUnmount(){
    // Remove listening post/subscription
    this.subscription.unsubscribe()
  }

  componentDidUpdate(prevProps){
    // Update if props receive a new message or channel changes
    // if (prevProps.messages.length !== this.props.messages.length)
    //   { 
    //     this.props.fetchChannel()
    //   };
    // Update if channel changes
    if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      let newMessage = this.state.newMessage
      newMessage.body = ""
      newMessage.channelId = this.props.match.params.channelId
      this.setState({newMessage})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state["newMessage"]);
    // Clear Input after Submission
    let newMessage = this.state.newMessage;
    newMessage.body = "";
    this.setState({["newMessage"]: newMessage})
  }

  handleChange(type){
    let that = this 
    return function(e){
      let modMessage = that.state.newMessage;
      modMessage.body = e.target.value;
      that.setState({["newMessage"] : modMessage})
    }
  }


  render(){
    let fullMessages = this.props.messages.concat(this.state.messages)
    return(
      <div id="channel-messages">
        <div id="channel-header"> 
        <i className="fa-solid fa-hashtag fa-lg" id="channel-message-hashtag"></i>
        <h5 id="channel-name">{this.props.channelName}</h5>
        </div>
        <ul id="channel-actual-messages"> 
        {fullMessages.map( (message) => {
          return(
            <Message 
            key = {message.id}
            message = {message}/>
          )
        })}
        
        </ul>
        <div id = "channel-message-footer-bar">
        <form autoComplete="off" id= "server-message-form" onSubmit={this.handleSubmit}> 
        <span id="sever-message-input-padding">"</span>
        <input
        type = "text"
        value = {this.state.newMessage.body}
        onChange={this.handleChange('body')}
        id="server-message-input"
        placeholder={`Message #${this.props.channelName}`}
        />
        <button id="server-message-submit-button"type="submit"> <i className="fa-solid fa-paper-plane fa-xl"/></button>
        </form>
        </div>
      </div>
    )
  }
}

export default ChannelMessages
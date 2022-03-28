import React from 'react'
import Message from './message'
import { createConsumer } from "@rails/actioncable"

class ChannelMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newMessage: this.props.message, 
      messages : this.props.messages,
      messageIds : this.props.messageIds
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
        
        // If data coming in as message object itself, i.e., edit or update
        // Do the approriate actions.
        if (Object.values(data).length > 1) 
        {  
          // Update the message if message is already in the state.
          if(that.state.messageIds.includes(data.id.toString())){
            let messages = that.state.messages;
            let modMessages = [];
            messages.forEach(function(message){
              // Update target message
              if(message.id === data.id){message.body = data.body;}
              // push all messages back into the state array
              modMessages.push(message)
            })
            console.log(messages);
            console.log(modMessages);
            // Update State
            that.setState({["messages"] : modMessages})
          } else {
          // Create a new message for the state
         // Find Author name in the channel's users
          data.authorName = that.props.members[data.author_id].username;
          // Mutate time stamp to match time stamps from backend
          let timestamp = new Date(data.created_at)
          let time = timestamp.toLocaleTimeString();
          let date = timestamp.toLocaleDateString();
          data.createdAt = date + " " + time ;
          // remodify so that edit pencil will appear
          data.authorId = data.author_id;
          that.setState({["messages"] : that.state.messages.concat([data])})
          }
        } // If data is just a message Id, delete the Message.
        else {
          // Filter Messages so that message is elminated.
          let messages = that.state.messages
          let filteredMessages = messages.filter(message => message.id !== data)
          that.setState({["messages"] : filteredMessages})
        }
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
    // Update props if they reiceve a new message or channel changes
    if (prevProps.messages.length !== this.props.messages.length)
      { 
        let messages = this.props.messages;
        let messageIds = this.props.messageIds;
        this.setState({messages});
        this.setState({messageIds})
      };
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
    e.stopPropagation();
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
    return(
      <div id="channel-messages">
        <div id="channel-header"> 
        <i className="fa-solid fa-hashtag fa-lg" id="channel-message-hashtag"></i>
        <h5 id="channel-name">{this.props.channelName}</h5>
        </div>
        <ul id="channel-actual-messages"> 
        {this.state.messages.map( (message) => {
          return(
            <Message 
            key = {message.id}
            message = {message}
            currentUserId = {this.props.currentUserId}
            />
          )
        })}
        
        </ul>
        <div id = "channel-message-footer-bar">
        <form autoComplete="off" id= "server-message-form" onSubmit={this.handleSubmit}> 
        <span className="server-message-input-padding">"</span>
        <input
        type = "text"
        value = {this.state.newMessage.body}
        onChange={this.handleChange('body')}
        className="server-message-input"
        placeholder={`Message #${this.props.channelName}`}
        />
        <button className="server-message-submit-button"type="submit"> <i className="fa-solid fa-paper-plane fa-xl"/></button>
        </form>
        </div>
      </div>
    )
  }
}

export default ChannelMessages
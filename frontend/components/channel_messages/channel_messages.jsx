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
    this.subscribe = this.subscribe.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
  }

  componentDidMount(){
    this.props.fetchChannel();
    this.subscribe()
  }

  componentWillUnmount(){
    // Remove listening post/subscription
    this.unsubscribe()
  }

  unsubscribe(){
    console.log('bye')
    this.subscription.unsubscribe()
  }
  subscribe(){
    // Set Up listening post/subscription once user mounts
    console.log("up")
    let that = this;
    const handlers = {
      received(data){
        console.log(that.state.messages)
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
            // rename so that edit pencil will appear
            data.authorId = data.author_id;
            that.setState({["messages"] : that.state.messages.concat([data])})
            // add Message id to messagesId array
            that.setState({["messageIds"]: that.state.messageIds.concat(data.id.toString())})
          }
        } else // If data is just a message Id, delete the Message.
          {
          // Filter Messages so that message is elminated.
          let messages = that.state.messages
          let filteredMessages = messages.filter(message => message.id !== data)
          that.setState({["messages"] : filteredMessages})
        }
      }
    }
    // Production Websocket:
    // const cable = createConsumer("wss://cacophony-1.herokuapp.com/cable")

    // Development Websocket: 
    const cable = createConsumer("ws://localhost:3000/cable")

    const ParamsToSend = {
      channel: "ServerChannel",
      id: this.props.message.channel_id
    }
    this.subscription = cable.subscriptions.create(ParamsToSend, handlers)
  }

  componentDidUpdate(prevProps){
    // Update props if they reiceve a new message or channel changes with different message length
    if (prevProps.messages.length !== this.props.messages.length)
      { 
        let messages = this.props.messages;
        let messageIds = this.props.messageIds;
        this.setState({messages});
        this.setState({messageIds})
      };
    // If channel changes or messages length changes, refetch channel
    if (prevProps.messages.length > 0 && this.props.messages.length > 0){
      if(prevProps.messages[0].id !== this.props.messages[0].id) {
        this.props.fetchChannel();
        this.unsubscribe();
        this.subscribe();
        let messages = this.props.messages;
        let messageIds = this.props.messageIds;
        this.setState({messages});
        this.setState({messageIds})
      }
    }
      // Update new Message if channel changes
    if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      // Reset Message
      let newMessage = this.state.newMessage
      newMessage.body = ""
      newMessage.channel_id = this.props.match.params.channelId
      this.setState({newMessage})
      // Reset subscription 
      this.props.fetchChannel();
      this.unsubscribe();
      this.subscribe();
      let messages = this.props.messages;
      let messageIds = this.props.messageIds;
      this.setState({messages});
      this.setState({messageIds})
    
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

  handleChange(){
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
        <br/>
        <ul id="channel-actual-messages"> 
        {this.state.messages.map( (message) => {
          return(
            <Message 
            key = {message.id}
            message = {message}
            currentUserId = {this.props.currentUserId}
            dM = {false}
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
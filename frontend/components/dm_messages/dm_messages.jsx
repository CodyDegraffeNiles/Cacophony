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
    this.subscribe = this.subscribe.bind(this)
  }

  componentDidMount(){
    this.props.fetchDmServer();
    this.subscribe()
  }

  componentWillUnmount(){
    this.subscription.unsubscribe()
  }

  subscribe(){
    let that = this;
    const handlers = {
      received(data){
        // If data coming is as a message object itself, it must be edited or added
        if (Object.values(data).length > 1){
          console.log(data)
          //update the message is it is already in the state.
          if(that.state.dmMessagesIds.includes(data.id.toString())){
            let dmMessages = that.state.dmMessages;
            let modMessages = [];
            dmMessages.forEach(function(message){
              // Update target message
              if(message.id === data.id){message.body = data.body;}
              // push all messages back into the state array
              modMessages.push(message)
            })
            // Update State
            that.setState({["messages"] : modMessages})
          } else {
            // Create a new message for the state
            // Get Authors' name in the state's users
            data.authorName = that.props.possibleAuthors[data.author_id].username
            // rename so that edit pencil will appear
            data.authorId  = data.author_id
            // Mutate time stamp to match time stamps from backend
            let timestamp = new Date(data.created_at)
            let time = timestamp.toLocaleTimeString();
            let date = timestamp.toLocaleDateString();
            data.createdAt = date + " " + time ;
            that.setState({["dmMessages"] : that.state.dmMessages.concat([data])})
            that.setState({["dmMessagesIds"]: that.state.dmMessagesIds.concat(data.id.toString())})
        }
        } else  {
          console.log("bye");
          //If data is just a message Id delete the Message
          // Filter Messages so that message is elminated.
          let dmMessages = that.state.dmMessages
          let filteredMessages = dmMessages.filter(dm => dm.id !== data)
          that.setState({["dmMessages"] : filteredMessages})
        }
      }
    }
    // Production Websocket:
    // const cable = createConsumer("wss://cacophony-1.herokuapp.com/cable")

    // Development Websocket: 
    const cable = createConsumer("ws://localhost:3000/cable")

    const ParamsToSend = {
      channel: "DmChannel",
      id: this.props.message.dm_server_id,
    }

    this.subscription = cable.subscriptions.create(ParamsToSend, handlers)
  }

  componentDidUpdate(prevProps){
  if (prevProps.dmMessagesIds.length !== this.props.dmMessagesIds.length)
    {
      let dmMessages = this.props.dmMessages;
      let dmMessagesIds = this.props.dmMessagesIds;
      this.setState({dmMessages})
      this.setState({dmMessagesIds})
    }
    if (prevProps.dmMessagesIds.length > 0 && this.props.dmMessagesIds.length > 0){
      if(prevProps.dmMessages[0].id !== this.props.dmMessages[0].id) {
        this.props.fetchDmServer();
        this.subscription.unsubscribe();
        this.subscribe();
        let dmMessages = this.props.dmMessages;
        let dmMessagesIds = this.props.dmMessagesIds;
        this.setState({dmMessages})
        this.setState({dmMessagesIds})
      }
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
    return(
      <div id="dm-messages">
        <div id="dm-header"> 
          <i className="fa-solid fa-at fa-lg" id="dm-message-at"></i>
          <h5 id="channel-name">{otherUsername} </h5>
        </div>
        <br/> 
        <ul id="dm-actual-messages"> 
          {this.state.dmMessages.map( (message) => {
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
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
    // this.subscribe = this.subscribe.bind(this)
  }

  componentDidMount(){
    this.props.fetchDmServer();
    // this.subscribe()
  }

  componentWillUnmount(){
    // this.subscription.unsubscribe()
  }

  // subscribe(){
  //   let that = this;
  //   const handlers = {
  //     received(data){
  //       // If data coming is as a message object itself, it must be edited or added
  //       if (Object.values(data).length > 1){
  //         let modMessages 
  //         modMessages.data_id = data
  //         console.log(modMessages)
  //         that.setState({["dmMessages"] : modMessages})
  //       }
  //     }
  //   }

    // Production Websocket:
    // const cable = createConsumer("wss://cacophony-1.herokuapp.com/cable")

    // Development Websocket: 
  //   const cable = createConsumer("ws://localhost:3000/cable")

  //   const ParamsToSend = {
  //     channel: "DmChannel",
  //     id: this.props.message.dm_server_id,
  //   }

  //   this.subscription = cable.subscriptions.create(ParamsToSend, handlers)
  // }

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
    console.log(this.state.dmMessages)
    let otherUsername = this.props.otherUser ? this.props.otherUser.username: null;
    return(
      <div id="dm-messages">
        <div id="dm-header"> 
          <i className="fa-solid fa-at" id="dm-message-at"></i>
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
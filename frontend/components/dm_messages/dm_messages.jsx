import React from 'react'
import Message from '../channel_messages/message'
import {createConsumer} from "@rails/actioncable"


class DmMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newMessage: this.props.message, 
      messages : this.props.messages,
      messageIds : this.props.messageIds
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.subscription = ""
  }

  componentDidMount(){
    this.props.fetchDmServer();
  }

  // handleChange(){
  //   let that = this 
  //   return function(e){
  //     let modMessage = that.state.newMessage;
  //     modMessage.body = e.target.value;
  //     that.setState({["newMessage"] : modMessage})
  //   }
  // }


  render(){
    return(
      <div id="dm-messages">
        <div id="dm-header"> 
          <i className="fa-solid fa-at" id="dm-message-at"></i>
          {/* <h5 id="channel-name">{this.props.otherUser} </h5> */}
        </div>
        <br/> 
        <ul id="dm-actual-messages"> 
          {this.state.messages.map( (message) => {
            return (
              <Message
                key = {message.id}
                message = {message}
                currentUserId = {this.props.currentUserId}/>
                )
            })
          }
        </ul>

        <div id= "dm-message-footer-bar">
          <form autoComplete="off" id= "dm-message-form" onSubmit={this.handleSubmit}> 
            <span className="server-message-input-padding">"</span>
            <input
            type = "text"
            // value = {this.state.newMessage.body}
            // onChange={this.handleChange('body')}
            className="dm-message-input"
            // placeholder={`Message #${this.props.otherUser}`}
          />
          <button className="server-message-submit-button"type="submit"> <i className="fa-solid fa-paper-plane fa-xl"/></button>
          </form>
        </div>
      </div>
    )
  }
}

export default DmMessages;
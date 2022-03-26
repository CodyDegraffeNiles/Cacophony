import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Message from './message'
import { createConsumer } from "@rails/actioncable"
import {useParams} from "react-router"

class ChannelMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newMessage: this.props.message, 
      messages : []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchChannel();
  }

  componentDidUpdate(prevProps){
    // Update if props receive a new message or channel changes
    if (prevProps.messages.length !== this.props.messages.length)
      { this.props.fetchChannel()};
    // Update if channel changes
    if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      let clearMessage = {
        body: "",
        author_id: this.state.newMessage.author_id,
        channel_id: this.props.match.params.channelId
      }
      this.setState({["newMessage"] : clearMessage})
    }

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state["newMessage"]);
    // Clear Input after Submission
    let clearMessage = this.state["newMessage"];
    clearMessage.body = "";
    this.setState({ ["newMessage"] : clearMessage})
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
        <ul> 
        {this.props.messages.map( (message) => {
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
        value = {this.state.body}
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
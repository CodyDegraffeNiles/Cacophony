import React from 'react'



class Message extends React.Component{  

  render(){
    return(
    <li className="server-message">
      <p className="message-author"> {this.props.message.authorName} 
      <span className="message-timestamp"> {this.props.message.createdAt}</span>
      </p>
      <p className="message-body">{this.props.message.body} </p>
    </li>
  )
    }
}

export default Message;
import React from 'react'



const Message = (props) => {
  return(
    <li className="server-message">
      <p className="message-author"> {props.message.authorName} 
      <span className="message-timestamp"> {props.message.createdAt}</span>
      </p>
      <p className="message-body">{props.message.body} </p>
    </li>
  )
}

export default Message;
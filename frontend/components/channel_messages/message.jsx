import React from 'react'


// Make Class Component so I can modify the created At

const Message = (props) => {
  return(
    <li className="server-message">
      <p className="message-author"> {props.message.authorName} 
      <span> {props.message.createdAt}</span>
      </p>
      <p className="message-body">{props.message.body} </p>
    </li>
  )
}

export default Message;
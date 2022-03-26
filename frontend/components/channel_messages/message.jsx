import React from 'react'



const Message = (props) => {
  return(
    <li>
      <p className="message-author"> {props.message.authorName} </p>
      <p className="message-body">{props.message.body} </p>
    </li>
  )
}

export default Message;
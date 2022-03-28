import React from 'react'



class Message extends React.Component{  

  render(){
    let editIcon = this.props.currentUserId === this.props.message.authorId ? 
    <i className="fa-solid fa-pencil fa-xs"/> : null;

    return(
    <li className="server-message">
      <p className="message-author"> {this.props.message.authorName} 
      <span className="message-timestamp"> {this.props.message.createdAt}</span>
      </p>
      <div className="message-body">
      <span>{this.props.message.body} </span>
      {editIcon}
      </div>

    </li>
  )
    }
}

export default Message;
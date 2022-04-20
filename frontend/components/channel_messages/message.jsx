import React from 'react';
import DmEditContainer from './dm_edit_container';
import MessageEditContainer from "./message_edit_contianer"


class Message extends React.Component{  
  constructor(props){
    super(props)
    this.state = {
      message: this.props.message,
      showEdit: false,
      dM: this.props.dm
    }
    this.toggleEdits = this.toggleEdits.bind(this)
  }

  toggleEdits(type){
    let that = this;
    return function(e){
      that.setState({[type]: !that.state[type]})
    }
  }

  render(){
    let editIcon = this.props.currentUserId === this.props.message.authorId 
      && !this.state.showEdit ? <i className="fa-solid fa-pencil fa-xs" 
      onClick={this.toggleEdits("showEdit")}/> 
      : null;

    // Return different message body based on if on edit form and/or dm
    let messageBody = this.state.showEdit && this.state.dM 
      ? <div id ="message-edit" onSubmit = {this.toggleEdits("showEdit")}>
          <DmEditContainer message = {this.props.message}/>
        </div>
      : this.state.showEdit && !this.state.dM
      ? <div id ="message-edit" onSubmit = {this.toggleEdits("showEdit")}>
          <MessageEditContainer message = {this.props.message}/>
        </div>
      : <span> {this.props.message.body} </span>

    return(
      <li className="server-message">
        <div className={`message-icon color-${this.props.colorId}`}><i className="fa-brands fa-discord"/></div>
          <div className="message-info">
            <div className="user-info">
              <p className="message-author"> {this.props.message.authorName} 
                <span className="message-timestamp"> {this.props.message.createdAt}</span>  
              </p>
            </div>
            <div className="message-body"> 
            {messageBody}
            {editIcon}
            </div>
        </div>

      </li>
    )
  }
}


export default Message;
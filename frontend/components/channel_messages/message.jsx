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



  renderMessageEdit(){
    // Return Dm Edit
    if(this.state.showEdit && this.state.dM){
      return (
      <div id ="message-edit" onSubmit = {this.toggleEdits("showEdit")}>
      <DmEditContainer
        message = {this.props.message}
      />
      </div>)
    }
    // Return Message Edit
    if(this.state.showEdit){
      return(
        <div id ="message-edit" onSubmit = {this.toggleEdits("showEdit")}>
        <MessageEditContainer
          message = {this.props.message}
        />
        </div>
      )
    }
  }

  render(){
    let editIcon = this.props.currentUserId === this.props.message.authorId ? 
    <i className="fa-solid fa-pencil fa-xs" onClick={this.toggleEdits("showEdit")}/> : null;

    return(
    <li className="server-message">
      <p className="message-author"> {this.props.message.authorName} 
      <span className="message-timestamp"> {this.props.message.createdAt}</span>
      </p>
      <div className="message-body">
      <span>{this.props.message.body} </span>
      {editIcon}
      {this.renderMessageEdit()}
      </div>

    </li>
  )
    }
}

export default Message;
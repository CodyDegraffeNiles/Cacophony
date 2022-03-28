import React from 'react'


class MessageEdit extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.message;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBody(){
    return (e) => {this.setState({["body"]: e.currentTarget.value})}
  }

  handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.action(this.state)
  }

  render(){
    return(
    <div id = "message-edit">
    <form autoComplete="off" id= "server-message-edit-form" onSubmit={this.handleSubmit}> 
        <span className="server-message-input-padding">"</span>
        <input
        type = "text"
        value = {this.state.body}
        onChange={this.handleBody()}
        className="server-message-input"
        placeholder={`${this.state.body}`}
        />
        <button className="server-message-submit-button"type="submit"> <i className="fa-solid fa-paper-plane fa-xl"/></button>
        </form>
      <button onClick={() => (this.props.deleteMessage(this.props.message.id))}> Delete Message </button>
    </div>
    )
  }
}


export default MessageEdit;
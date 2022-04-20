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
    this.props.action(this.state);
  }

  render(){
    return(
    <div id = "message-edit">
      <form autoComplete="off" id= "server-message-edit-form" onSubmit={this.handleSubmit}> 
        <span className="server-message-input-padding">"</span>
        <textarea
        value = {this.state.body}
        onChange={this.handleBody()}
        className="edit-message-input"
        placeholder={`${this.state.body}`}
        />
        <button type="submit" className="server-message-submit-button"> 
          <i className="fa-solid fa-paper-plane fa-xl edit-paper-plane"/>
        </button>
        </form>
      <button className="delete-message" 
      onClick={() => (this.props.delete(this.props.message.id))}> Delete Message 
      </button>
    </div>
    )
  }
}


export default MessageEdit;
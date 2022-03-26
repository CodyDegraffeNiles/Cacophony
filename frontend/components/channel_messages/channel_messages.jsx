import React from 'react'
import Message from './message'



class ChannelMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.message

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
      this.setState({["body"] : ""})
      this.setState({["channel_id"] : this.props.match.params.channelId})
    }

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
    // Clear Input after Submission
    this.setState({["body"] : ""})
  }

  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
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
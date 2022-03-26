import React from 'react'
import Message from './message'



class ChannelMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: this.props.body,
      author_id: this.props.authorId,
      channel_id: this.props.channelId,
    }

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
        <p>Channel Messages go Here</p>
        <ul> 
        {this.props.messages.map( (message) => {
          return(
            <Message 
            key = {message.id}
            message = {message}/>
          )
        })}
        
        </ul>
        <form onSubmit={this.handleSubmit}> 

        <br/>
        <input
        type = "text"
        value = {this.state.body}
        onChange={this.handleChange('body')}
        />
        <button type="submit" >Post</button>
        </form>
      </div>
    )
  }
}

export default ChannelMessages
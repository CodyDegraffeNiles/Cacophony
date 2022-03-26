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

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
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
import React from 'react'



class ChannelMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: this.props.body,
      author_id: this.props.userId,
      channel_id: this.props.channelId,
    }
  }

  componentDidMount(){
    this.props.fetchChannel();
  }



  render(){
    return(
      <div id="channel-messages">
        <p>Channel Messages go Here</p>

        <form onSubmit={this.handleSubmit}> 
        <input></input>
        </form>
      </div>
    )
  }
}

export default ChannelMessages
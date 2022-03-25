import React from 'react'



class ChannelMessages extends React.Component{

  componentDidMount(){
    this.props.fetchChannel();
  }

  render(){
    return(
      <div id="channel-messages">
        <p>Channel Messages go Here</p>
      </div>
    )
  }
}

export default ChannelMessages
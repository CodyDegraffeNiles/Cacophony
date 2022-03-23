import React from 'react'



class ChannelNav extends React.Component{
  constructor(props){
    super(props)
  }
  // componentdidRender(){
  //   // Will have a serverId hardcoded to get only a servers channels
  //   this.props.fetchChannels();
  // }

  render(){
    return (
    <div id="channel-nav"> 
    <h5>Hello</h5>

    {/* <ul id="channel-nav-list"> 
        {this.props.channels.map((channel) => {
          return (
          <li key={channel.id}>
          <Link 
          to={`/${this.props.server.id}/${channel.id}`} 
          onClick={() => this.props.fetchChannel(server.id)}
          >#{channel.name}</Link>
          </li>
          )
        })}
      </ul> */}
    
      </div>
      )
    }
  }

  export default ChannelNav;
import React from 'react'
import EditServerFormContainer from '../server_from/edit_server_form_container';



class ChannelNav extends React.Component{
  constructor(props){
    super(props)

  }
  // componentDidMount(){
  //   // Will have a serverId hardcoded to get only a servers channels
  //   this.props.fetchChannels();
  // }


  render(){
    // Fail Safe to allow Page to load properly
    let serverName;
    this.props.server ? serverName = this.props.server.name : null;
    // Display proper server opitions depnding on who is logged in  and include fail
    // safe when loading the page.
    let serverOptions = null;
    if(this.props.server && this.props.currentUserId === this.props.server.ownerId){
      serverOptions = <EditServerFormContainer type = "owner"/>
    } else if(this.props.server) {
      serverOptions = <EditServerFormContainer type = "member"/>
    };

    
    return (
    <div id="channel-nav"> 
    <div id="channel-nav-server-name">
      <h5>{serverName}</h5> 
      <button id="server-edit">
      <i className="fa-solid fa-chevron-down"
      onClick={() => this.showServerEdits("show")}
      />
        </button>
      {serverOptions}
    </div>

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
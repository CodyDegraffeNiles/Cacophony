import React from 'react'
import EditServerFormContainer from '../server_from/edit_server_form_container';


class ChannelNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      noShow: true
    }

    this.toggleServerEdits = this.toggleServerEdits.bind(this);
    this.closeForm = this.closeForm.bind(this);

  }
  // componentDidMount(){
  //   // Will have a serverId hardcoded to get only a servers channels
  //   this.props.fetchChannels();
  // }

  // Toggle edit bar on and off

  toggleServerEdits(type){
    let that = this;
    return function(e){
      that.setState({[type]: !that.state[type]})
    }
  }

  closeForm(){
    this.setState({noShow: true})
  }

  renderServerEdits(){
    if(!this.state.noShow && this.props.currentUserId === this.props.server.ownerId){
      return (
      <div> 
      <div id="double-modal-container" onClick={() => this.closeForm()}> </div>
      <EditServerFormContainer noShow = {this.state.noShow} type = "owner"/>
      </div>)
    } else if (this.state.noShow){
      return null;
    } else {
      return (
      <div> 
      <div id="double-modal-container" onClick={() => this.closeForm()}> </div>
      <EditServerFormContainer noShow = {this.state.noShow} type = "member"/>
      </div>)
    }
  }

  render(){
    // Fail Safe to allow Page to load properly
    let serverName;
    this.props.server ? serverName = this.props.server.name : null;
    
    return (
      <div id="channel-nav"> 
      <div id="channel-nav-server-name">
        <h5>{serverName}</h5> 
        <i className="fa-solid fa-chevron-down"
        onClick={this.toggleServerEdits("noShow")}
        />
      </div>
        {this.renderServerEdits()}

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
      <br/>
      <p> List of Channels.</p>
      </div>
      )
    }
  }

  export default ChannelNav;
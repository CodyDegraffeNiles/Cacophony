import React from 'react'
import EditServerFormContainer from '../server_from/edit_server_form_container';
import { Link} from "react-router-dom";

class ChannelNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      noShow: true,
      channelCreate: false,
      channelEdit: false,
    }

    this.toggleEdits = this.toggleEdits.bind(this);
    this.closeForm = this.closeForm.bind(this);

  }

  // Toggle edit bar on and off

  toggleEdits(type){
    let that = this;
    return function(e){
      that.setState({[type]: !that.state[type]})
    }
  }

  closeForm(type){
    this.setState({[type]: !that.state[type]})
  }

  renderServerEdits(){
    if(!this.state.noShow && this.props.currentUserId === this.props.server.ownerId){
      return (
      <div> 
      <div id="double-modal-container" onClick={() => this.closeForm("noShow")}> </div>
      <EditServerFormContainer noShow = {this.state.noShow} type = "owner"/>
      </div>)
    } else if (this.state.noShow){
      return null;
    } else {
      return (
      <div> 
      <div id="double-modal-container" onClick={() => this.closeForm("noShow")}> </div>
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
        onClick={this.toggleEdits("noShow")}
        />
      </div>
        {this.renderServerEdits()}

    <br/>
    <br/> 
    <div id="channel-list-header"> 
    <h6>Channels</h6>
    {this.renderChannelCreate()}
    </div>
    <ul id="channel-nav-list"> 
        {this.props.channels.map((channel) => {
          return (
          <li key={channel.id}>
          <Link 
          to={`/servers/${this.props.server.id}/${channel.id}`} 
          // onClick={() => this.props.fetchChannel(server.id)}
          ><i className="fa-solid fa-hashtag fa-sm"></i>{channel.name}</Link>
          </li>
          )
        })}
      </ul>
      </div>
      )
    }
  }

  export default ChannelNav;
import React from 'react'
import EditServerFormContainer from '../server_from/edit_server_form_container';
import CreateChannelFormContainer from '../channel_forms/create_channel_form_container';
import EditChannelFormContainer from '../channel_forms/edit_channel_form_container'
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
    let that = this;
    this.setState({[type]: !that.state[type]})
  }

  // Render Server Edits
  renderServerEdits(){
    if(!this.state.noShow && this.props.currentUserId === this.props.server.ownerId){
      return (
      <div>
      <div id="edit-modal-container" onClick={() => this.closeForm("noShow")}> </div>
      <EditServerFormContainer noShow = {this.state.noShow} type = "owner"/>
      </div>)
    } else if (this.state.noShow){
      return null;
    } else {
      return (
      <div> 
      <div id="edit-modal-container" onClick={() => this.closeForm("noShow")}> </div>
      <EditServerFormContainer noShow = {this.state.noShow} type = "member"/>
      </div>)
    }
  }
  // Render Channel button
  renderChannelCreateButton(){
    if(this.props.server && this.props.currentUserId === this.props.server.ownerId){
      return(
      <i className="fa-solid fa-plus" 
      onClick={this.toggleEdits("channelCreate")}></i>
      )
    } else {
      return(
        null
      )
    }
  };

  // Render Channel Create Form()
  renderChannelCreateForm(){
    if(this.state.channelCreate){
      return <CreateChannelFormContainer serverId = {this.props.server.id}/>
    }
    else {
      return null;
    }
  }



  // Render Channel Edit Button

  renderChannelEditButton(){
      if(this.props.server && this.props.currentUserId === this.props.server.ownerId){
        return(
        <i className="fa-solid fa-gear fa-2xs"
        ></i>
        )
    }  else {return(null)}
  }

  renderChannelEditForm(){
    if(this.state.channelEdit){
      return <EditChannelFormContainer serverId = {this.props.server.id}/>;
    }
    else { return null}
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
    {this.renderChannelCreateButton()}
    </div>
    <ul id="channel-nav-list"> 
        {this.props.channels.map((channel) => {
          return (
          <li key={channel.id} className="channel-nav-item">
          <div>
          <Link 
          to={`/servers/${this.props.server.id}/${channel.id}`} 
          // onClick={() => this.props.fetchChannel(server.id)}
          ><i className="fa-solid fa-hashtag fa-sm"></i>{channel.name}</Link>
          </div>
          {this.renderChannelEditButton()}
          </li>
          )
        })}
      </ul>
      {this.renderChannelEditForm()}
      {this.renderChannelCreateForm()}
      </div>
      )
    }
  }

  export default ChannelNav;
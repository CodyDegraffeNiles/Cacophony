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
      // State to keep track of which channel Edit Form to render
      channelId: null,
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
      return (<div>
      <div id="double-modal-container" onSubmit = {() => this.closeForm("channelCreate")}> 
      <div class="channel-edit-modal" onClick={() => this.closeForm("channelCreate")}> </div> 
      (<CreateChannelFormContainer
      channelName = {""} 
      serverId = {this.props.server.id}/>)
      </div>
      </div>)
    }
    else {
      return null;
    }
  }

  // Set Channel Id
  setChannelId(channelId, channelName){
    this.setState({["channelId"]: channelId})
    this.setState({["channelName"]: channelName})
  }

  // Render Channel Edit Button

  renderChannelEditButton(channel){
      if(this.props.server && this.props.currentUserId === this.props.server.ownerId){
        return(
        <i className="fa-solid fa-gear fa-2xs"
        onClick ={this.toggleEdits("channelEdit")}
        ></i>
        )
    }  else {return(null)}
  }

  renderChannelEditForm(){
    if(this.state.channelEdit){
      return (
      <div>
      <div class="channel-edit-modal" onClick={() => this.closeForm("channelEdit")}> </div> 
      <EditChannelFormContainer 
      channelId = {this.state.channelId}
      channelName = {this.state.channelName}
      serverId = {this.props.server.id}
      />
      </div>
      )

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
          <li 
          onClick={ () => this.setChannelId(channel.id, channel.name)}
          key={channel.id} 
          className="channel-nav-item">
          <div>
          <Link 
          to={`/servers/${this.props.server.id}/${channel.id}`} 
          // onClick={() => this.props.fetchChannel(server.id)}
          ><i className="fa-solid fa-hashtag fa-sm"></i>{channel.name}</Link>
          </div>
          {this.renderChannelEditButton()}
          {/* Have to Render Channel Edit Form here so that you have access to ChannelId */}
          </li>
          )
        })}
      </ul>
      {/* Can Render Create Channel Form out here as you do not need any channel params */}
      {this.renderChannelCreateForm()}
      {this.renderChannelEditForm()}
      </div>
      )
    }
  }

  export default ChannelNav;
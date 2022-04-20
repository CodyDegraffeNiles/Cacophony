import React from "react";
import EditServerNameFormContainer from "./edit_server_name_form_container";

class EditServerForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.server.id,
      name: this.props.server.name,
      owner_id: this.props.server.owner_id,
      public: this.props.server.public,
      serverName: false,

    }

    this.handleDelete = this.handleDelete.bind(this);
    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this);
  }

  componentDidMount(){
    this.props.fetchServer();
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props){
      this.setState({["name"]: this.props.server.name})
      this.setState({["id"]: this.props.server.id})
      this.setState({["owner_id"]: this.props.server.owner_id})
      this.setState({["public"]: this.props.server.public})
    }
  }

  // handle proper redirect after deletion of a server - Push to user homepage
  handleDelete(){
    this.props.deleteServer();
    this.props.history.push(`/servers/@me`)
  }

  // Handles Leaving a server
  handleLeave(membership){
    this.props.deleteMembership(membership);
    this.props.history.push('/servers/@me');
  }

  openForm(){
    this.setState({["serverName"]: true})
  }

  closeForm(){
    this.setState({["serverName"]: false})
  }

  handleServerEdit(){
    // setTimeout Mimics a promise across divs/components
    // let that = this;
    // setTimeout(() => {if(this.props.errors.length === 0) {that.closeForm()}}, 200)
  }


  renderServerNameEdit(){
    if(this.state.serverName){
      return (
        <div id="double-server-modal-container">
          <div id="server-edit-modal" onClick={() => this.closeForm()}> </div> 
          <EditServerNameFormContainer
          server = {this.props.server}
          />
          <button id="channel-exit-x" onClick={() => this.closeForm()}><i className="fa-solid fa-xmark"/></button>
      </div>

      )
    }
  }

  
  render(){
    // Only render when user clicks the drop down menu next to server name
    if (this.props.noShow) {
      return null
    }

    // Create different edit forms for the owner and a member
    // Owner
    if (this.props.type === "owner"){ 
    return (
    <div id="edit-server-form"> 
      <button id="update-server-name" onClick={() => this.openForm()}>Edit Server</button>
      <button id="delete-server" onClick={() => this.handleDelete()}>Delete Server</button>
      {this.renderServerNameEdit()}
    </div>
    )
    } // Member
    else {
      let membership = {
        member_id: this.props.currentUser.id,
        server_id: this.props.server.id
      }
      return(
      <div id="edit-server-form"> 
        <button  id="leave-server" onClick={ () => this.handleLeave(membership)}>Leave Server
        </button>
    </div>
      )
    }
  }
}

export default EditServerForm;
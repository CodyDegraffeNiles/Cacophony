import React from "react";

class EditServerForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.server.id,
      name: this.props.server.name,
      owner_id: this.props.server.owner_id,
      public: this.props.server.public
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchServer();
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props){
      this.setState({["name"]: this.props.server.name})
      this.setState({["id"]: this.props.server.id})
      this.setState({["owner_id"]: this.props.server.owner_id})
      this.setState({["public"]: this.props.server.public})
    }
  }

  // Handle Submission of the from for name edit

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  // Handle changes in the name state

  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
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
  
  render(){
    // Only render when user clicks the drop down menu next to server name
    if (this.props.noShow) {
      return null
    }

    const errorMessage  = this.props.errors.length > 0 ? <span id="server-update-error"> Invalid Server Name</span> :
    null;

    // Create different edit forms for the owner and a member
    // Owner
    if (this.props.type === "owner"){ 
    return (
    <div id="edit-server-form"> 
        {errorMessage}
      <form onSubmit={this.handleSubmit}>
          <input 
          id= "edit-server-name"
          type="text"
          value={this.state.name}
          onChange={this.handleName("name")}
          /> 
          <button id="update-server-name"type="submit">Update Server Name</button>
      </form>
      <button id="delete-server" onClick={() => this.handleDelete()}>Delete Server</button>
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
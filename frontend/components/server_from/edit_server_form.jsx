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
  }

  componentDidMount(){
    this.props.fetchServer();
  }

  componentDidUpdate(prevProps){
    console.log(this.state);
    if (prevProps !== this.props){
      this.setState({["name"]: this.props.server.name})
      this.setState({["id"]: this.props.server.id})
      this.setState({["owner_id"]: this.props.server.owner_id})
      this.setState({["public"]: this.props.server.public})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }

  render(){
    // Create different edit forms for the owner and a member
    // Ownere
    console.log(this.state.name)
    console.log(this.props.server)
    if (this.props.type === "owner"){ 
    return (
    <div id="edit-session-form"> 
      <form onSubmit={this.handleSubmit}>
        <label> Edit Server Name
          <input 
          type="text"
          value={this.state.name}
          onChange={this.handleName("name")}
          />
          <button type="submit">Update Server</button>
        </label>
      </form>
      <button onClick={() => this.props.deleteServer()}>Delete Server</button>
    </div>
    )
    } //Member
    else {
      let membership = {
        member_id: this.props.currentUser.id,
        server_id: this.props.server.id
      }
      return(
      <div id="edit-session-form"> 
      <button onClick={() => this.props.deleteMembership()}>Leave Server</button>
    </div>
      )
    }
  }
}

export default EditServerForm;
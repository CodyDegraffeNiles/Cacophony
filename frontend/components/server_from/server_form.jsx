import React from "react";
import {Link} from "react-router-dom"

class ServerForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      owner_id: this.props.currentUser.id,
      name: this.props.server.name,
      public: this.props.server.public,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePublic = this.handlePublic.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    // Create new Server and then push to the new server's first/general channel
    let that = this;
    this.props.action(this.state).then(function(action){
      let server  = action.server.server
      return that.props.history.push(`/servers/${server.id}/${server.firstChannelId}`);
    });
  }

  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }

  handlePublic(value, type){
    let that = this;
    return function(e){
      e.preventDefault();
      that.setState({[type]: value}
      )
    }
  }

  render(){
    // Conditionally show of the Server Form modal
    let submitButton = this.state.public ? <button id='create-server' type="submit">
      Create A <span id="public-status"> Public </span> Server</button> : 
      <button id='create-server' type="submit">
      Create A <span id="public-status"> Private</span> Server</button>

    if (this.props.show){
    return (
    <div id="server-form"> 
      <form onSubmit={this.handleSubmit}>
        <h4> Tell Us More About Your Server </h4>
        <p> In order to help you set up, is it for a few friends (Private) or larger
          community (Public)? </p>
        <div id="public-info"> 
          <div onClick={this.handlePublic(false, "public")} > <p className='public-info-p'>For Me and My Friends</p></div>
          <div onClick={this.handlePublic(true, "public")}>  <p className='public-info-p'> For A Club or Community </p></div>
        </div>
        <h5 id="create-server-name"> Server Name</h5>
        <input 
        type="text"
        value={this.state.name}
        onChange={this.handleName("name")}
        />
        {submitButton}
      </form>
    </div>
    )
    // Render nothing if modal does not need to be displayed
    } else{
      return null;
    }
  }

}


export default ServerForm;
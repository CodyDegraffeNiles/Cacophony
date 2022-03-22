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
    this.props.action(this.state);
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
    return (
    <div id="session-form"> 
      <form onSubmit={this.handleSubmit}>
        <label> Server Name
          <input 
          type="text"
          value={this.state.name}
          onChange={this.handleName("name")}
          />
          <div id="public-info"> 
          <button onClick={this.handlePublic(false, "public")} > For Me and My Friends</button>
          <button onClick={this.handlePublic(true, "public")}> For A Club or Community </button>
          </div>

          <button type="submit">Create</button>
        </label>
      </form>
    </div>
    )
  }

}


export default ServerForm;
import React from "react";



class ServerForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      owner_id: this.props.currentUser.id,
      name: this.props.server.name,
      public: this.props.server.public,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createServer()
  }
  handleName(type){
    (e) => {this.setState({[type]: e.currentTarget.value})}
  }

  handlePublic(value){
    return function(e){
      this.setState({[public]: value}
      )
    }
  }

  render(){
    <div id="session-form"> 
      <form onSubmit={this.handleSubmit()}>
        <label> Server Name
          <input type="text"
          value={this.state.name}
          onChange={this.handleName("name")}
          />
          <div id="public-info"> 
          <button onClick={this.handlePublic(false)} value= "false"> For Me and My Friends</button>
          <button onClick={this.handlePublic(true)} value= "true"> For A Club or Community </button>
          </div>

          <button type="submit">Create</button>
        </label>
      </form>
    </div>
  }

}


export default ServerForm;
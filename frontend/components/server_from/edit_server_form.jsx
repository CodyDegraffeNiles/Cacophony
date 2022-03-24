import React from "react";

class EditServerForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.server.id,
      owner_id: this.props.server.owner_id,
      name: this.props.server.name,
      public: this.props.server.public,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePublic = this.handlePublic.bind(this);
  }

  componentDidMount(){
    this.props.fetchServer();
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
  }

}


export default EditServerForm;
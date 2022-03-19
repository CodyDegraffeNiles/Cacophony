import React from  "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
  }

  render(){
    const email = this.props.formType === "signup" ? <label> Email <input 
    type="text"
    value = {this.state.email}
    onChange ={this.handleChange('email')}/>
    </label>
    : "";

    const link = this.props.formType === "signup" ? 
    <Link to = "/login">Login</Link> : 
    <Link to ="/signup">Signup</Link>

    return(
      <div> 
        {link}
        <h3>{this.props.formType.toUpperCase()} </h3>
        <form onSubmit={this.handleSubmit}>
        <label> Username
        <input  
        type = "text"
        value = {this.state.username}
        onChange ={this.handleChange('username')}/>
        </label>
        <br/> 
        {email}
        <br/> 
        <label> Password
        <input 
        type = "password"
        value = {this.state.password}
        onChange={this.handleChange('password')}
        />
        </label>
        <br/>
        <button type="submit"> {this.props.formType}</button>
        </form>
        </div>
    )
  }
}

export default SessionForm;
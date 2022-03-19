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
    this.demoLogin = this.demoLogin.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
  }

  demoLogin(){
    let demoUser = {
      email: "KoalaDemo@caveman.com",
      username: "DemoUser",
      password: "DropBear"
    }
    this.setState({email: demoUser.email})
    this.setState({password: demoUser.password})
  }

  render(){
    // Creats a username input if the form is a signup form
    const username = this.props.formType === "signup" ? <label> Username
        <input  
        type = "text"
        value = {this.state.username}
        onChange ={this.handleChange('username')}/>
        <br/>
        </label> 
    : null;

    // Creates a demo login button if the form type is login
    const demo = this.props.formType === "login" ? <button type ="submit" 
    onClick= {() => this.demoLogin()} > Demo Login
    </button> : null

    // Create link to the opposite form
    const link = this.props.formType === "signup" ? 
    <Link to = "/login">Already have an account?</Link> : 
    <Link to ="/signup">Register</Link>

    // Creates welecome Message based on formType
    const welcomeHeader = this.props.formType === "login" ? "Welcome Back!" : 
    "Create an account"

    const messageHeader = this.props.formType === "login" ? 
    "We're so excited to see you again!" : null

    // Footer message with redirect to other session from.
    const footerMessage = this.props.formType === "login" ? <span> Need an account? </span> :
    null;

    // Button message for each form
    const buttonMessage = this.props.formType === "login" ? "Login" : 
    "Continue"

    return(
      <div id ="login-form"> 
        <h3>{welcomeHeader} </h3>
        <p>{messageHeader}</p>
        <form onSubmit={this.handleSubmit}>
        <label> Email <input 
        type="text"
        value = {this.state.email}
        onChange ={this.handleChange('email')}/>
        </label>
        <br/> 
        {username}
        <label> Password
        <input 
        type = "password"
        value = {this.state.password}
        onChange={this.handleChange('password')}
        />
        </label>
        <br/>
        <button type="submit"> {buttonMessage} </button>
        {demo}
        </form>
        {footerMessage} {link}
        </div>
    )
  }
}

export default SessionForm;
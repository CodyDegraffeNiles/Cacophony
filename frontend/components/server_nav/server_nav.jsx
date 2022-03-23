import React from "react"
import {Link} from "react-router-dom"
import CreateServerFormContainer from "../server_from/create_server_form_container";
import ServerSearchContainer from "../server_search/server_search_container";

class ServerNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // Toggle state of server create form and search form
      create : false,
      search : false,
    }
  }

  componentDidMount(){
    this.props.fetchUsersServers(this.props.currentUser.id);
  }

  // Toggle forms on and off
  toggleForm(formType){
    return (e) => {this.setState({[formType]: !this.state[formType]})}
  }

  render(){
    return(
      <div id="server-nav"> 
      <ul id = "server-nav-list">
        {this.props.servers.map((server) => {
          return (
          <li key={server.id}>
          <Link key={server.id} to={`/servers/${server.id}`}>{server.name}</Link>
          </li>
          )
        })}
      <li>  <button id="create-servers" onClick={this.toggleForm("create")}> Create Server(placeholder) </button></li>
      <li> <button id="search-servers" onClick={this.toggleForm("search")}> Search Servers</button></li>
      </ul>
      <CreateServerFormContainer show= {this.state.create}/> 
      <ServerSearchContainer show={this.state.search}/> 
      </div>
    )
  }
}

export default ServerNav
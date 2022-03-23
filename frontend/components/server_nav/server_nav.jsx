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

    this.toggleForm = this.toggleForm.bind(this) 
  }

  componentDidMount(){
    this.props.fetchUsersServers(this.props.currentUser.id);
  }

  // Toggle forms on and off as well as turns off the other form
  toggleForm(active, deactive){
    let that = this;
    return function(e){ 
      that.setState({[active]: !that.state[active]})
      that.setState({[deactive]: false})
    }
  }

  render(){
    return(
      <div id="server-nav"> 
      <CreateServerFormContainer show = {this.state.create}/> 
      <ServerSearchContainer show={this.state.search}/> 
      <ul id = "server-nav-list">
        {this.props.servers.map((server, index) => {
          return (
          <li key={index}>
          <Link 
          to={`/servers/${server.id}`} 
          onClick={() => this.props.fetchServer(server.id)}
          >{server.name}</Link>
          </li>
          )
        })}
      </ul>
      <button id="create-servers" onClick={this.toggleForm("create", "search")}> Create Server</button>
      <button id="search-servers" onClick={this.toggleForm("search","create")}> Search Servers</button>
      </div>
    )
  }
}

export default ServerNav
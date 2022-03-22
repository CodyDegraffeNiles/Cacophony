import React from "react"
import {Link} from "react-router-dom"


class ServerNav extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUsersServers(this.props.currentUser.id);
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
      <li>  <button id="create-servers"> Create Server(placeholder) </button></li>
      <li> <button id="search-servers" onClick={() => this.props.fetchAllServers()}> Search Server(placeholder)</button></li>
      </ul>
      </div>
    )
  }
}

export default ServerNav
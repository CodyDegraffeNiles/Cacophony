import React from "react"
import {Link} from "react-router-dom"


class ServerNav extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="server-nav"> 
      <ul id = "server-nav-list">
        {this.props.servers.map((server) => {
          return (
          <li>
          <p> {server.name} </p>
          <Link to={`/api/servers/${server.id}`}> </Link>
          </li>
          )
        })}
      </ul>
      <button id="create-servers"> Create Server(placeholder) </button>
      <button id="search-servers"> Search Server(placeholder)</button>
      </div>
    )
  }
}

export default ServerNav
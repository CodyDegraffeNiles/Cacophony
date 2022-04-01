import React from "react"

class ServerSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      servers: "",
    }
  }

  componentDidMount(){
    let that = this;
    // Grab all the Servers from the database and attach them to the state
    // of the react component, not to muddy the waters of the servers in the 
    // overall state.
    this.props.fetchAllServers().then( 
      function(response){
        return that.setState({servers: response})
      }
    )
  }

  handleJoin(serverId, firstChannelId){
    this.props.createServerMembership({
              server_id: serverId,
              member_id: this.props.currentUser.id
            });
    this.props.history.push(`/servers/${serverId}/${firstChannelId}`)
  }

  render(){
    // Conditional show for Server Search Modal
    let initalServerArray = (Object.values(this.state.servers))
    let serverIds = this.props.servers.map((server)=> {return server.id})
    // Filter correct server data(Hotfix - should probably fitler data in the backend rather than the front
    // Do to scalling issues.)

    // No duplications from the Users already joined/owned servers
    let serverArray = initalServerArray.filter((server) => !serverIds.includes(server.id))
    // Only private servers.
    serverArray = serverArray.filter((server) => server.public)

    if (this.props.show){
      return(
      <div id="server-search">
        <h5 id="server-search-header"> Public Servers Avaliable for You to Join!</h5>
        <ul id ="searched-servers"> 
          {serverArray.map((server) => {
            return (<li
            key = {server.id}
            >
            <div className="server-credentials">
            <div className="server-search-inital"><span>{server.name.charAt(0)} </span></div>
            <span>{server.name}</span>
            </div>
            <button onClick={() => this.handleJoin(server.id, server.firstChannelId)}>
              Join</button>
            </li>)
          })}
        </ul>
      </div>
      )
    } else
    return null;
  }
}

export default ServerSearch
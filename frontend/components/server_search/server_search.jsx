import React from "react"

class ServerSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      servers: "placeholder"
    }
  }

  componentDidMount(){
    console.log(this.state)
    let that = this;
    // Grab all the Servers from the Data base and attach them to the state
    // of the react component, not to muddy the waters of the servers in the 
    // overall state.
    this.props.fetchAllServers().then( 
      function(response){
        return that.setState({servers: response})
      }
    )
  }

  render(){
    // Conditional show for Server Search Modal
    let serverArray = (Object.values(this.state.servers))
    if (this.props.show){
      return(
      <div id="server search">
        <ul> 
          {serverArray.map((server) => {
            return (<li
            key = {server.id}
            >
            <p>{server.name}</p>
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
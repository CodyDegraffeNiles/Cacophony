import React from "react"


class UserSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount(){
    let that = this;
    // Grab all the users that belong to a server that the user belongs to 
    this.props.fetchUsers().then(
      function(response){
        let users = Object.values(response)
        that.setState({users})
      }
    )
  }

  handleDmCreation(userId){
    let that = this;
    this.props.createDmServer().then(
      function(response){
        that.props.createDmMembership({dm_server_id: response.id, member_id: userId})
        that.props.createDmMembership({dm_server_id: response.id, member_id: that.props.currentUser.id})
        this.props.history.push(`/servers/@/${userId}/${response.id}`)
      }
      
    )
    
  }

  render(){
    return(
      <div id= "user-search">
        <h5> Select User from a shared server and start a DM with them!</h5>
        <ul id="user-search"> 
          {this.state.users.map((user) => {
            return( <li 
              key = {user.id}
            >
              <span>{user.username}</span>
              <button onClick={() => this.handleDmCreation(user.id)}> 
              CreateDm
              </button>
            </li>
            )
          })}
        </ul>
      </div>
    )
  }
}


export default UserSearch;
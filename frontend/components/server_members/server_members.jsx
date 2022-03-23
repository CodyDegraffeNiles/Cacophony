import React from 'react'


class ServerMembers extends React.Component{
  
  render(){
    return (<div id="server-member-show"> 
    <ul>
      Users - {this.props.members.length}
      {this.props.members.map((member) => {
        return ( <li
        key={member.id}
        >
          <h5> {member.username} </h5>
        </li>)
      })
      }
    </ul>
    </div>)
  }
}



export default ServerMembers;
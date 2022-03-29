import React from 'react'


class ServerMembers extends React.Component{

  componentDidMount(){
    // Fetchs Specific Server on Mount to correctly populate server members;
    this.props.fetchServer();
  }
  
  render(){
    return (<div id="server-member-show"> 
    <div id= "mimic-nav-bar"> 
    </div>
    <ul>
      <br/> 
      Members - {this.props.members.length}
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
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
    <ul id = "server-members-list">
      <br/> 
      <p id="member-title"> Members - {this.props.members.length}</p>
      {this.props.members.map((member) => {
        return ( <li
        key={member.id}
        className="server-member-item"
        >
          <div className={`user-icon color-${member.colorId}`}><i className="fa-brands fa-discord"/></div>
          <h5 className='member-username'> {member.username} </h5>
        </li>)
      })
      }
    </ul>
    </div>)
  }
}



export default ServerMembers;
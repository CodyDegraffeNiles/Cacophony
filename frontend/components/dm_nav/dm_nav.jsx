import React from 'react';
import {Link} from 'react-router-dom';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';



class DmNav extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUserDmServers(this.props.currentUser.id);
  }

  render(){
    return(
      <div id="dm-nav">
        <div id="simiulate-nav-bar"> 

        </div>
        <br/> 
        <div className="list-header">
          <h6> Direct Messages</h6>
          <i className="fa-solid fa-plus" ></i>
        </div>
      
        <ul id="dm-nav-list"> 
          {this.props.dmUsers.map((member) => {
          if (member.id !== this.props.currentUser.id)
          return(
            <Link
            key={member.id}
            to={`/servers/@me/${member.dmId}`}
            > 
            <li
              className="dm-member-item"
            >
              <div className={`user-icon color-${member.colorId}`}><i className="fa-brands fa-discord"/></div>
              <h5 className='member-username'> {member.username} </h5>
            </li>
            </Link>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }
}

export default DmNav;

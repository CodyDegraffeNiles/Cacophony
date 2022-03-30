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
        {this.props.dmUsers.map((user) => {
          if (user.id !== this.props.currentUser.id)
          return(
            <p key="monkey"> {user.dmId}</p>
          )
        })}
      </ul>

      </div>
    )
  }
}

export default DmNav;

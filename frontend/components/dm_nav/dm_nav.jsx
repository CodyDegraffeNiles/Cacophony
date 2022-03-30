import React from 'react';
import {Link} from 'react-router-dom';



class DmNav extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidUpdate(){
    this.props.fetchUsersServers(this.props.currentUser.id);
  }

  render(){
    return(
      <div id="dm-nav">

      <h6 id="dm-list-header">Direct Messages</h6>

      <ul id="dm-nav-list"> 
        Placeholder 
      </ul>

      </div>
    )
  }
}

export default DmNav;

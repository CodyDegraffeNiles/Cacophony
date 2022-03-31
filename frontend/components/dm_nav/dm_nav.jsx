import React from 'react';
import {Link} from 'react-router-dom';
import UserSearchContainer from "../../components/user_search/user_search_container.jsx"


class DmNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: false
    }

    this.toggleSearch = this.toggleSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this)
  }

  componentDidMount(){
    this.props.fetchUserDmServers(this.props.currentUser.id);
  }

  toggleSearch(){
    this.setState({search : true})
  }

  closeSearch(){
    this.setState({search: false})
  }

  renderSearch(){
    if (this.state.search){
      return(
      <div> 
        <div id="double-modal-container" onClick = {() => this.closeSearch()}> 
          <UserSearchContainer/>
          <button id="server-exit-x" onClick={() => this.closeSearch()}><i className="fa-solid fa-xmark"/></button>
        </div>
      </div>
      )
    }
  }

  render(){
    return(
      <div id="dm-nav">
        <div id="simiulate-nav-bar"> 
        </div>
        <br/> 
        <div className="list-header">
          <h6> Direct Messages</h6>
          <i className="fa-solid fa-plus" 
          onClick={this.toggleSearch}
          ></i>
          {this.renderSearch()}
        </div>
      
        <ul id="dm-nav-list"> 
          {this.props.dmUsers.map((member) => {
          if (member.id !== this.props.currentUser.id)
          return(
            <Link
            key={member.id}
            to={`/servers/@me/${member.id}/${member.dmId}`}
            > 
            <li
              className="dm-member-item -item"
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

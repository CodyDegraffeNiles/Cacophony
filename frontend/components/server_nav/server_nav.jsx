import React from "react"
import {Link} from "react-router-dom"
import CreateServerFormContainer from "../server_from/create_server_form_container";
import ServerSearchContainer from "../server_search/server_search_container";

class ServerNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // Toggle state of server create form and search form
      create : false,
      search : false,
    }

    this.toggleForm = this.toggleForm.bind(this) 
    this.closeForm = this.closeForm.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchUsersServers(this.props.currentUser.id);
  }
  
  // Toggle forms on and off as well as turns off the other form
  toggleForm(active, deactive){
    let that = this;
    return function(e){ 
      that.setState({[active]: !that.state[active]})
      that.setState({[deactive]: false})
    }
  }

  closeForm(){
    this.setState({create: false})
    this.setState({search: false})
  }

  handleCreateSubmit(){
    // setTimeout Mimics a promise across divs/components
    let that = this;
    setTimeout(() => {if(this.props.errors.length === 0) {that.closeForm()}}, 100)
  }

  renderCreate(){
    if (this.state.create){
      return (
      <div> 
        <div id="double-modal-container" onSubmit = {() => this.handleCreateSubmit()}> 
            <div id = "modal-container" onClick={() => this.closeForm()}> </div>
            <CreateServerFormContainer show={true}/>
            <button id="server-exit-x" onClick={() => this.closeForm()}>
              <i className="fa-solid fa-xmark"/>
            </button>
        </div>
      </div>
      )
    }
  }

  renderSearch(){
    if (this.state.search){
      return (
      <div> 
        <div id = "modal-container" onClick={() => this.closeForm()}> </div>
        <ServerSearchContainer show={true}/>
        <button id="server-exit-x" onClick={() => this.closeForm()}>
          <i className="fa-solid fa-xmark"/>
        </button>
      </div>
      )
    }
  }

  render(){
    return(
      <div id="server-nav"> 
        <ul id = "server-nav-list">
          <li key="home-bubble"> 
            <Link to={`/servers/@me`}> 
              <i className="fa-brands fa-discord home-bubble"/>
            </Link> 
          </li>
        {this.props.servers.map((server, index) => {
          return (
          <li key={index}>
            <Link 
            to={`/servers/${server.id}/${server.firstChannelId}`} 
            onClick={() => this.props.fetchServer(server.id)}
          > 
              <p className="server-inital"> {server.name.charAt(0)} </p> 
            </Link>
          </li>
          )
        })}
        <li key="createServer"> 
          <button id="create-servers" onClick={this.toggleForm("create", "search")}>
              <i className="fa-solid fa-plus"/> 
          </button>
        </li>
        <li key="searchServer"> 
          <button id="search-servers" onClick={this.toggleForm("search","create")}> 
            <i className="fa-solid fa-compass"/> 
          </button> 
        </li>
      </ul>
      {this.renderCreate()}
      {this.renderSearch()}
      </div>
    )
  }
}

export default ServerNav
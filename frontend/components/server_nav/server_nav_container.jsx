import {connect} from "react-redux";
import { fetchServers, fetchServer } from "../../actions/server_actions";
import ServerNav from "./server_nav";


const mapStateToProps = (state) => {
  return{
    currentUser: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUsersServers : (userId) => {dispatch(fetchServers(userId))},
    fetchAllServers : () => {dispatch(fetchServers())},
    fetchServer: (serverId) => dispatch(fetchServer(serverId))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ServerNav);
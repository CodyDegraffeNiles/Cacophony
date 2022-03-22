import {connect} from "react-redux";
import { fetchServers } from "../../actions/server_actions";
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
    fetchAllServers : () => {dispatch(fetchServers())}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ServerNav);
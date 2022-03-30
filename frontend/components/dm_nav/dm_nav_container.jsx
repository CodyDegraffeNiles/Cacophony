import {connect} from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServers } from "../../actions/dm_server_actions";
import DmNav from "./dm_nav";



const mapStateToProps = (state) => {
  return{
    currentUser: state.entities.users[state.session.id],
    dmUsers: Object.values(state.entities.users)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUserDmServers: (userId) => dispatch(fetchDmServers(userId))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DmNav))
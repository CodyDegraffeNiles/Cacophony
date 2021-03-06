import {connect} from "react-redux";
import {fetchUsers} from "../../util/session_api_util";
import {createDmMembership} from "../../actions/dm_memberships.actions"
import {createDmServer} from "../../actions/dm_server_actions"
import UserSearch from "./user_search";
import {withRouter} from "react-router";


const mapStateToProps = (state) => {
  return{
    currentUser: state.entities.users[state.session.id],
    users: Object.values(state.entities.servers)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUsers : () => fetchUsers(),
    createDmMembership: (membership) => dispatch(createDmMembership(membership)),
    createDmServer: (membership) => dispatch(createDmServer(membership))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSearch));
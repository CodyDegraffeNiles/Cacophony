import { connect } from "react-redux";
import { updateServer,deleteServer} from "../../actions/server_actions";
import EditServerForm from "./edit_server_form";
import { withRouter } from "react-router";


const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.entities.users[state.session.id],
    server: state.entities.servers[ownProps.match.params.serverId],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    action: (server) => {dispatch(updateServer(server))},
    deleteServer: () => {dispatch(deleteServer([ownProps.match.params.serverId]))},
    fetchServer: () => {dispatch(fetchServer([ownProps.match.params.serverId]))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
(EditServerForm));
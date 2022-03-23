import {connect} from "react-redux";
import ServerMembers from "./server_members";
import {fetchServer } from "../../actions/server_actions";


const mapStateToProps = (state) => {
  return{
    members: Object.values(state.entities.users)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchServer: () => {dispatch(fetchServer(ownProps.match.params.serverId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerMembers);

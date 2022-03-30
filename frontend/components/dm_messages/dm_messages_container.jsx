import {connect} from "react-redux";
import DmMessasges from "./dm_messages"
import { withRouter } from "react-router";
import {fetchDmServer} from "../../actions/dm_server_actions";
import {createDmMessage} from "../../actions/dm_messages_actions";


const mapStateToProps = (state, ownProps) => {
  return{
    message: {
      body: "",
      author_id: state.session.id,
      dm_server_id: ownProps.match.params.dmServerId,
    },
    dmMessages: state.entities.dmMessages,
    currentUserId: state.session.id,
    dmMessagesIds: Object.keys(state.entities.dmMessages),
    otherUser: state.entities.users[ownProps.match.params.otherUserId]
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchDmServer : () => {dispatch(fetchDmServer(ownProps.match.params.dmServerId))},
    action: (message) => {dispatch(createDmMessage(message))}

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DmMessasges)

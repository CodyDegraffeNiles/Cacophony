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
      channel_id: ownProps.match.params.dmServerId,
    },
    messages: state.entities.messages,
    currentUserId: state.session.id,
    messageIds: Object.keys(state.entities.messages)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchDmServer : () => dispatch(fetchDmServer(ownProps.match.params.dmServerId)),
    action: (message) => {dispatch(createDmMessage(message))}

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DmMessasges)

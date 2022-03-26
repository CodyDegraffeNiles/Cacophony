import {connect} from "react-redux";
import ChannelMessages from "./channel_messages";
import { fetchChannel } from "../../actions/channel_actions";
import {createMessage} from "../../actions/message_actions";



const mapStateToProps = (state, ownProps) => {
  return{
    body : "",
    authorId: state.session.id,
    channelId: ownProps.match.params.channelId,
    messages: Object.values(state.entities.messages)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchChannel: () => {dispatch(fetchChannel(ownProps.match.params.channelId))},
    action: (message) => {dispatch(createMessage(message))}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChannelMessages)
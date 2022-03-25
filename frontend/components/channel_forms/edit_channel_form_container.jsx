import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { updateChannel, deleteChannel} from "../../actions/channel_actions";

const mapStateToProps = (ownProps) => {
  return{
    formType: "Update Channel"
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (channel) => {dispatch(updateChannel(channel))},
    deleteChannel: (channelId) => {dispatch(deleteChannel(channelId))}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm)
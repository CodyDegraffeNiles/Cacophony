import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { updateChannel, deleteChannel, fetchChannel} from "../../actions/channel_actions";
import { withRouter } from "react-router";

const mapStateToProps = (ownProps) => {
  return{
    formType: "Update Channel"
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (channel) => dispatch(updateChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm))
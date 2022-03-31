import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { updateChannel, deleteChannel} from "../../actions/channel_actions";
import { withRouter } from "react-router";

const mapStateToProps = () => {
  return{
    formType: "Update Channel"
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (channel) => dispatch(updateChannel(channel)),
    deleteChannel: (channelId) => {dispatch(deleteChannel(channelId))}
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm))
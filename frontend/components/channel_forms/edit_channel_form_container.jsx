import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { updateChannel } from "../../actions/channel_actions";

const mapStateToProps = (ownProps) => {
  return{
    channel: {
      name: ownProps.match.params.channelId
    },
    formType: "Update Channel"
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (channel) => {dispatch(updateChannel(channel))},
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm)
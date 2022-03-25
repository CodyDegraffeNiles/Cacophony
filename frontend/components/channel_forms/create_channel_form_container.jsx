import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { createChannel } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.serverId)
  return{
    channel: {
      server_id: ownProps.match.params.serverId,
      name: "",
    },
    formType: "Create Channel"
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (channel) => {dispatch(createChannel(channel))},
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm)
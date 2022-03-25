import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { createChannel } from "../../actions/channel_actions";

const mapStateToProps = (ownProps) => {
  return{
    formType: "Create Channel"
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (channel) => {dispatch(createChannel(channel))},
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm)
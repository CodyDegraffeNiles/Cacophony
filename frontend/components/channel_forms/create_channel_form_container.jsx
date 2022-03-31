import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { createChannel } from "../../actions/channel_actions";
import { withRouter } from "react-router";

const mapStateToProps = (ownProps) => {
  return{
    formType: "Create Channel"
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (channel) => dispatch(createChannel(channel)),
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm))
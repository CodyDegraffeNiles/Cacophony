import {connect} from "react-redux";
import ChannelMessages from "./channel_messages";
import { fetchChannel } from "../../actions/channel_actions";


const mapStateToProps = (state, ownProps) => {
  return{

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchChannel: () => {dispatch(fetchChannel(ownProps.match.params.channelId))}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChannelMessages)
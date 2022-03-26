import {connect} from "react-redux";
import ChannelNav from './channel_nav'
import { fetchChannel } from "../../actions/channel_actions";


const mapStateToProps = (state, ownProps) => {
  return{
    currentUserId : state.session.id,
    server: state.entities.servers[ownProps.match.params.serverId],
    channels: Object.values(state.entities.channels)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
        fetchChannel: (channelId) => {dispatch(fetchChannel(channelId))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelNav);

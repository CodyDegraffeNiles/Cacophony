import {connect} from "react-redux";
import ChannelNav from './channel_nav'


const mapStateToProps = (state, ownProps) => {
  return{
    currentUserId : state.session.id,
    server: state.entities.servers[ownProps.match.params.serverId],
    channels: Object.values(state.entities.channels)
  }
}

export default connect(mapStateToProps, null)(ChannelNav);

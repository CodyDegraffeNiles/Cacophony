import {connect} from "react-redux";
import ChannelNav from './channel_nav'

const mapStateToProps = (state, ownProps) => {
  return{
    currentUserId : state.session.id,
    server: state.entities.servers[ownProps.match.params.serverId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    // fetchServer: () => {dispatch(fetchServer(ownProps.match.params.serverId))}
  }
}

export default connect(mapStateToProps, null)(ChannelNav);

import {connect} from "react-redux";
import DmMessasges from "./dm_messages"
import { withRouter } from "react-router";


const mapStateToProps = (state, ownProps) => {
  return{
    message: {
      body: "",
      author_id: state.session.id,
      channel_id: ownProps.match.params.dmId,
    },
    messages: state.entities.messages,

  }
}
const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default connect(mapStateToProps,null)(DmMessasges)

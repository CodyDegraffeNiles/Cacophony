import {connect} from "react-redux";
import DmMessasges from "./dm_messages"
import { withRouter } from "react-router";


const mapStateToProps = (state, ownProps) => {
  return{

  }
}
const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DmMessasges))

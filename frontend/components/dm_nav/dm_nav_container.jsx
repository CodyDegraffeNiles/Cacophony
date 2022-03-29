import {connect} from "react-redux";
import { withRouter } from "react-router";
import DmNav from "./dm_nav";



const mapStateToProps = (state, ownProps) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DmNav))
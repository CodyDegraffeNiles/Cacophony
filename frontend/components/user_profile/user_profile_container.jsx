import { connect } from "react-redux";
import UserProfile from "./user_profile";
import {elminateCurrentUser, logout, updateUser} from '../../actions/session_actions'


const mapStateToProps = (state, ownProps) => {
  return{
    user: state.entities.users[ownProps.match.params.userId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    update : (user) => {dispatch(updateUser(user))},
    delete : (userId) => {dispatch(elminateCurrentUser(userId))},
    logout : () => {dispatch(logout())}

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
import { connect } from "react-redux";
import UserEditForm from "./user_edit_form";
import {updateUser, removeErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  console.log(Object.values(state.entities.users)[0])
  return{
    errors: state.errors.session,
    user: Object.values(state.entities.users)[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (user) => dispatch(updateUser(user)),
    removeErrors: () => dispatch(removeErrors())
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm)
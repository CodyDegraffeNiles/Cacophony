import { connect } from "react-redux";
import UserEditForm from "./user_edit_form";
import { updateUser, removeErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return{
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (user) => dispatch(updateUser(user)),
    removeErrors: () => dispatch(removeErrors())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm)
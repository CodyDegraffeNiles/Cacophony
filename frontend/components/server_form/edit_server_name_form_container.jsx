import { connect } from "react-redux";
import {updateServer, removeServerErrors} from "../../actions/server_actions";
import EditServerNameForm from "./edit_server_name_form";
import { withRouter } from "react-router";


const mapStateToProps = (state) => {
  return{
    errors: state.errors.server
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    update: (server) => {dispatch(updateServer(server))},
    removeErrors: () => dispatch(removeServerErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditServerNameForm);
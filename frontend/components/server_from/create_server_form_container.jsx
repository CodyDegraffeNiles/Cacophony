import { connect } from "react-redux";
import ServerForm from "./server_form";
import { createServer } from "../../actions/server_actions";
import { withRouter } from "react-router";


const mapStateToProps = (state) => {
  return{
    currentUser: state.entities.users[state.session.id],
    server: {
      owner_id: state.session.id,
      name: "",
      public: false
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: function(server){return dispatch(createServer(server))},
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));
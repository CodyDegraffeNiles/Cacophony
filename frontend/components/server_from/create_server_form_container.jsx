import { connect } from "react-redux";
import ServerForm from "./server_form";
import { createServer } from "../../actions/server_actions";


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
    action: (server) => {dispatch(createServer(server))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
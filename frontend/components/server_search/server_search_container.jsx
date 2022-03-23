import {connect} from "react-redux";
import { fetchServers } from "../../util/server_utils";
import ServerSearch from "./server_search"


const mapStateToProps = (state) => {
  return{
    currentUser: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchAllServers : function(){return fetchServers()}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ServerSearch);

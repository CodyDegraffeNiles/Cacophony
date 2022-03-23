import {connect} from "react-redux";
import ServerMembers from "./server_members";


const mapStateToProps = (state) => {
  return{
    members: Object.values(state.entities.users)
  }
}

export default connect(mapStateToProps, null)(ServerMembers);

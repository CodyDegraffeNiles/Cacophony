import {connect} from "react-redux";
import ServerMembers from "./server_members";




const mapStateToProps = (state) => {
  return{
    // memebers: state.entities.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(ServerMembers);

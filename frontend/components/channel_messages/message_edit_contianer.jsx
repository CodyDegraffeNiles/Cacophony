import { connect } from "react-redux";
import { updateMessage, deleteMessage } from "../../actions/message_actions";
import MessageEdit from "./message_edit";



const mapDispatchToProps =(dispatch) => {
  return{
    action: (message) => dispatch(updateMessage(message)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId))
  }
}





export default connect(null, mapDispatchToProps)(MessageEdit)
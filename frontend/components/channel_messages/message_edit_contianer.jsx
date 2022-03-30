import { connect } from "react-redux";
import { updateMessage, deleteMessage } from "../../actions/message_actions";
import MessageEdit from "./message_edit";
import {updateDm} from "../../actions/dm_messages_actions"



const mapDispatchToProps =(dispatch) => {
  return{
    action: (message) => dispatch(updateMessage(message)),
    delete: (messageId) => dispatch(deleteMessage(messageId))
  }
}





export default connect(null, mapDispatchToProps)(MessageEdit)
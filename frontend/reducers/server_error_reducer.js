import { RECEIVE_SERVER, RECEIVE_SERVER_ERRORS, RECEIVE_SERVERS } from "../actions/server_actions";
import {RECEIVE_CHANNEL} from "../actions/channel_actions"



const serverErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors;
    case RECEIVE_SERVER:
      return [];
    case RECEIVE_SERVERS:
      return [];
    case RECEIVE_CHANNEL:
      return [];
    // Default case is to return nothing becuase the server form has been exicted out of?
    default:
      return state;
  }
}


export default serverErrorsReducer;
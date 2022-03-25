import {REMOVE_SERVER} from "../actions/server_actions";
import {RECEIVE_CHANNEL, REMOVE_CHANNEL} from "../actions/channel_actions";
import {REMOVE_MEMBERSHIP} from "../actions/server_membership_actions";
import {RECEIVE_MESSAGE, REMOVE_MESSAGE} from "../actions/message_actions"

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_MESSAGE: 
      newState[action.payload.id] = action.payload
      return newState;
    case REMOVE_MESSAGE:
      delete newState[action.payload.id];
      return newState
    case RECEIVE_CHANNEL:
      newState = action.payload.messages
      return newState;
    case REMOVE_CHANNEL:
      return {};
    case REMOVE_SERVER:
      return {}
    case REMOVE_MEMBERSHIP:
      return {}
    default:
      return state;
  } 
}


export default messageReducer;
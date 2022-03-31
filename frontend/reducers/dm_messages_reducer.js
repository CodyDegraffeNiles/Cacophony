import { RECEIVE_DM_SERVER, REMOVE_DM_SERVER } from "../actions/dm_server_actions";
import {RECEIVE_DM_MEMBERSHIP, REMOVE_DM_MEMBERSHIP} from "../actions/dm_memberships.actions"
import { RECEIVE_DM_MESSAGE, REMOVE_DM_MESSAGE} from "../actions/dm_messages_actions";

const dmMessageReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    // case RECEIVE_DM_MESSAGE: 
      // Don't need anymore as the websockets are taking care of this now.
      // newState[action.payload.id] = action.payload
      // return newState;
    case REMOVE_DM_MESSAGE:
      delete newState[action.payload.id]
      return newState
    case RECEIVE_DM_SERVER:
    // Clear Messages so that if you receive a new dm_server, messages do not persit
    newState = {}
    // Fail Safe in case dm_server has no messages
    if(action.dmServer.dms){newState = action.dmServer.dms}
      return newState;
    case REMOVE_DM_SERVER:
      return {};
    case RECEIVE_DM_MEMBERSHIP:
      newState = action.payload.dms
      return newState;
    case REMOVE_DM_MEMBERSHIP:
      return {}
    default:
      return state;
  } 
}


export default dmMessageReducer;
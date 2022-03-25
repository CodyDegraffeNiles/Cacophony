import {RECEIVE_SERVER, REMOVE_SERVER} from "../actions/server_actions";
import {RECEIVE_CHANNEL, REMOVE_CHANNEL} from "../actions/channel_actions";
import { REMOVE_MEMBERSHIP } from "../actions/server_membership_actions";


const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CHANNEL:
      newState[action.channel.id] = action.channel
      return newState;
    case REMOVE_CHANNEL:
      delete newState[action.channel.id]
      return newState;
    case RECEIVE_SERVER:
      // Fails Safe if a server has no channels()
      if (action.server.channels){return action.server.channels}
      return {};
    case REMOVE_SERVER:
      return {}
    case REMOVE_MEMBERSHIP:
      return {}
    default:
      return state;
  } 
}


export default channelReducer;
import {RECEIVE_SERVER, REMOVE_SERVER} from "../actions/server_actions";
import {RECEIVE_CHANNEL, REMOVE_CHANNEL} from "../actions/channel_actions"


const channelReducer = (state = {}. action) => {
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
      return action.server.channels;
    case REMOVE_SERVER:
      return {}
    case REMOVE_MEMBERSHIP:
      return {}
    default:
      return state;
  } 
}


export default channelReducer;
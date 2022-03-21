import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions";


const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      newState[action.server.id] = action.server
      return newState
    case REMOVE_SERVER:
      delete newState[action.server.id]
      return newState;
    default:
      return state;
  }
}

export default serversReducer;

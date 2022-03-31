import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_DM_SERVERS } from "../actions/dm_server_actions";
import {RECEIVE_DM_MEMBERSHIP} from "../actions/dm_memberships.actions"

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.user.id]: action.user
      });
    case REMOVE_CURRENT_USER:
      return {};
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_SERVER: 
      return action.server.users
    case RECEIVE_DM_SERVERS:
      return action.dmServers.users;
    case RECEIVE_DM_MEMBERSHIP:
      // Add NewOther user to the state
      return Object.assign({}, state, {
        [action.payload.user.id]: action.payload.user
      });
      return state
    default:
      return state;
  }
}



export default usersReducer;
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";


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
    default:
      return state;
  }
}



export default usersReducer;
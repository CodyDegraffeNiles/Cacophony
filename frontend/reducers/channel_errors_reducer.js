import {RECEIVE_CHANNEL_ERRORS, REMOVE_CHANNEL_ERRORS } from "../actions/channel_actions";

const channelErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case REMOVE_CHANNEL_ERRORS:
      return [];
    default:
      return state;
  }
}


export default channelErrorsReducer;
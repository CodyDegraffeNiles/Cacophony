import {combineReducers} from "redux";
import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import channelReducer from "./channel_reducer";
import messageReducer from "./message_reducer";


const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelReducer,
  messages: messageReducer, 
})


export default entitiesReducer;
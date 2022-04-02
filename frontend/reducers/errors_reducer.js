
import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import serverErrorReducer from "./server_error_reducer"

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  server: serverErrorReducer
});

export default errorsReducer;
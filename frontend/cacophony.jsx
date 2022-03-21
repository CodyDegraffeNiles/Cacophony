import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
import {createServer} from "./util/server_utils";
import {createUser, createSession, deleteSession} from "./util/session_api_util";
import {logout} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: {id: window.currentUser.id }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}
  // Window commands - Just for TESTING!
  window.createServer = createServer;
  window.getState = store.getState;
  // Testing only
  ReactDOM.render(<Root store ={store}/>, root);
});
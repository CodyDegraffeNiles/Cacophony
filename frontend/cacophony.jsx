import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
import {fetchServers, fetchServer, deleteServer, createServer, updateServer} from "./actions/server_actions"
import {login} from './actions/session_actions'

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
  window.getState = store.getState;
  window.fetchServer = fetchServer;
  window.fetchServers = fetchServers;
  window.deleteServer = deleteServer; 
  window.createServer = createServer;
  window.updateServer = updateServer;
  window.login = login;
  // Testing only
  ReactDOM.render(<Root store ={store}/>, root);
});
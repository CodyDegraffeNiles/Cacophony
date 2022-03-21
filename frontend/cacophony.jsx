import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
import {createServer, updateServer, fetchServer, fetchServers, deleteServer} from "./util/server_utils";

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
  window.updateServer = updateServer;
  window.fetchServer = fetchServer;
  window.fetchServers = fetchServers; 
  window.deleteServer = deleteServer;
  window.getState = store.getState;
  // Testing only
  ReactDOM.render(<Root store ={store}/>, root);
});
import React from "react";
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
import {createUser, createSession, deleteSession} from "./util/session_api_util";



document.addEventListener(('DOMContentLoaded'), () => {
  const root = document.getElementById('root')
  const store = configureStore()
   // TESTING SUITE!
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING SUITE!
  ReactDOM.render(<Root store ={store}/>, root)
})
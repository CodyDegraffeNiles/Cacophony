import * as sessionUtil from '../util/session_api_util';
import { createUser, createSession, deleteSession } from "../util/session_api_util";


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => {
  return{ 
  type: RECEIVE_CURRENT_USER,
  user
  }
};
const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    })
}

const receiveErrors = (errors) => {
    return({
        type: RECEIVE_SESSION_ERRORS, 
        errors
    })
}

export const signup = (user) => (dispatch) => {
    return sessionUtil.createUser(user)
    .then((modUser) => {dispatch(receiveCurrentUser(modUser))}
    , (err) => {dispatch(receiveErrors(err.responseJSON)) })
}

export const login = (user) => (dispatch) => {
    return sessionUtil.createSession(user)
    .then((modUser) => {dispatch(receiveCurrentUser(modUser))}
    ,(err) => {dispatch(receiveErrors(err.responseJSON)) })
  };

export const logout = () => (dispatch) => {
  return sessionUtil.deleteSession().then(() => (
    dispatch(logoutCurrentUser())
  ))
};



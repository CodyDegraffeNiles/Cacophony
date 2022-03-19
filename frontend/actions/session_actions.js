import * as sessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return{ 
  type: RECEIVE_CURRENT_USER,
  currentUser
  }
};
const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    })
}

export const receiveErrors = (errors) => {
    return({
        type: RECEIVE_SESSION_ERRORS, 
        errors
    })
}

export const signup = (user) => (dispatch) => {
    return sessionUtil.createUser(user)
    .then((modUser) => {dispatch(receiveCurrentUser(modUser))}
    , (err) => {dispatch(receiveErrors(err.responseJson)) })
}

export const login = (user) => (dispatch) => {
    return sessionUtil.createSession(user)
    .then((modUser) => {dispatch(receiveCurrentUser(modUser))}
    ,(err) => {dispatch(receiveErrors(err.responseJson)) })
  };

export const logout = () => (dispatch) => {
  return sessionUtil.deleteSession().then(() => (
    dispatch(logoutCurrentUser())
  ))
};

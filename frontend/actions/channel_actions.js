import * as channelUtil from "../util/channel_utils"


export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";


const recieveChannel = (payload) => {
  return{
    type: RECEIVE_CHANNEL, 
    payload
  }
}

const removeChannel = (payload) => {
  return{
    type: REMOVE_CHANNEL, 
    payload
  }
}

const receiveErrors = (errors) => {
    return({
        type: RECEIVE_SESSION_ERRORS, 
        errors
    })
}

export const createChannel = (channel) => (dispatch) => {
    return channelUtil.createChannel(channel)
    .then((payload) => {dispatch(recieveChannel(payload))}
    , (err) => {dispatch(receiveErrors(err.responseJSON)) })
}

export const deleteChannel = (channelId) => (dispatch) => {
  return channelUtil.deleteChannel(channelId)
  . then(() => dispatch(removeChannel(channelId)))
}

export const updateChannel = (channel) => (dispatch) => {
    return channelUtil.updateChannel(channel)
    .then((payload) => {dispatch(recieveChannel(payload))}
    , (err) => {dispatch(receiveErrors(err.responseJSON)) })
}
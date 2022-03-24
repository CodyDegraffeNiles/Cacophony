import * as severMembershipUtil from "../util/server_membership_utils"


export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP"
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP"


const receiveMembership = (membership) => {
  return{
    type: RECEIVE_MEMBERSHIP, 
    membership
  }
}


const removeMembership = (payload) => {
  return{
    type: REMOVE_MEMBERSHIP, 
    payload
  }
}

export const createServerMembership = (membership) => (dispatch) => {
  return severMembershipUtil.createServerMembership(membership)
  .then((membership) => {dispatch(receiveMembership(membership))})
}


export const deleteMembership = (memebershipId, membership) => (dispatch) => {
  return severMembershipUtil.deleteServerMembership(memebershipId, membership)
  .then((payload) => {dispatch(removeMembership(payload))})
}


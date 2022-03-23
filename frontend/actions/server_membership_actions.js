import * as severMembershipUtil from "../util/server_membership_utils"


export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP"
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP"


const receiveMembership = (membership) => {
  return{
    type: RECEIVE_MEMBERSHIP, 
    membership
  }
}


const removeMembership = (membershipId) => {
  return{
    type: REMOVE_MEMBERSHIP, 
    membershipId
  }
}

export const createServerMembership = (membership) => (dispatch) => {
  return severMembershipUtil.createServerMembership(membership)
  .then((membership) => {dispatch(receiveMembership(membership))})
}


export const deleteMembership = (memebershipId) => (dispatch) => {
  return severMembershipUtil.deleteServerMembership(memebershipId)
  .then(() => {dispatch(removeMembership(memebershipId))})
}


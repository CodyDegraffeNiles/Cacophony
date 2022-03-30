

export const createDmMembership = (membership) => {
  return $.ajax({
    method: "POST",
    url: "/api/dm_server_memberships",
    data: {dm_membership: membership}
  })
}



export const deleteDmMembership = (membershipId, membership) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/dm_server_memberships/${membershipId}`,
    data: {dm_membership: membership}
  })
}


export const createServerMembership = (membership) => {
  return $.ajax({
    method: "POST",
    url: "/api/server_memberships",
    data: {server_membership: membership}
  })
}



export const deleteServerMembership = (membershipId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/server_memberships/${membershipId}`
  })
}
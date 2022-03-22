

export const createServerMembership = (membership) => {
  return $.ajax({
    method: "POST",
    url: "/server_memberships",
    data: {membership: membership}
  })
}



export const deleteServerMembership = (membershipId) => {
  return $.ajax({
    method: "DELETE",
    url: `/server_memberships/${membershipId}`
  })
}
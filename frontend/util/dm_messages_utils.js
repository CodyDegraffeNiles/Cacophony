
export const createDm = (message) => {
  return $.ajax({
    method: "POST",
    url: "/api/dm_messages",
    data: {message}
  })
}

export const deleteDm = (messageId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/dm_messages/${messageId}`,
  })
}

export const updateDm = (message) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/dm_messages/${message.id}`,
    data: {message}
  })
}

export const createMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: "/api/messages",
    data: {message}
  })
}

export const deleteMessage = (messageId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/messages/${messageId}`,
  })
}

export const updateMessage = (message) => {
  return $.ajax({
    method: "Update",
    url: `/api/messages/${message.id}`,
    data: {message}
  })
}
export const fetchDmServers = (userId) => {
  return $.ajax({
    method: "GET",
    url: "/api/dm_servers",
    data: {user : userId}
  })
}

export const fetchDmServer = (dmServerId) => {
  return $.ajax({
    method: "GET",
    url: `/api/dm_servers/${dmServerId}`
  })
}

export const createServer = (dmServer) => {
  return $.ajax({
    method: "POST",
    url: "/api/dm_servers",
    data: {dmServer: dmServer}
  })
}

export const updateServer = (dmServer) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/dm_servers/${dmServer.id}`,
    data: {dmServer: dmServer}
  })
}

export const deleteServer = (serverId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/servers/${serverId}`,
  })
}

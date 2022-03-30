@dm_servers.each do |dm_server|
  json.set! dm_server.id do
      json.extract! dm_server, :id,
  end
end

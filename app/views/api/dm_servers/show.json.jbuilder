
json.dm_server do 
  json.extract! @dm_server, :id
end

json.users do 
  @dm_server.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username, :email, :number_tag, :color_id
    end
  end
end

  # Messages of the first channel
json.dms do 
  @dm_server.messages.each do |dm|
    json.set! dm.id do
      est = Time.zone.utc_to_local(dm.created_at)
      # Handle utc conversion issues to get actual EST
      est = est + 4.hours
      json.author_name dm.author.username
      json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
      json.extract! dm, :id, :server_id, :author_id, :body
    end
  end
end


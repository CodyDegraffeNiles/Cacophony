
json.server do 
  json.extract! @server, :id, :name, :owner_id, :public
end

json.users do 
    json.set! @server.owner.id do
      json.extract! @server.owner, :id, :username, :email, :number_tag
  end

  @server.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username, :email, :number_tag
    end
  end
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do 
      json.extract! channel, :id, :name, :server_id
    end
  end
end




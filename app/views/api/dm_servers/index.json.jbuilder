@dm_servers.each do |dm_server|
  json.set! dm_server.id
    json.users do 
    @dm_server.members.each do |member|
      if member.id !== @current_user.id
        json.set! member.id do
          json.extract! member, :id, :username, :email, :number_tag, :color_id
        end
      end
    end
  end
end

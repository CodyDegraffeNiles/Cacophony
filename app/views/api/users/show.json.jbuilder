json.partial! "api/users/user", user: @user

json.servers do 
  @user.ownedServers.each do |server|
    json.set! server.id do 
      json.extract! server, :id, :name, :owner_id, :public
    end
  end
  @user.servers.each do |server|
    json.set! server.id do 
      json.extract! server, :id, :name, :owner_id, :public
    end
  end
end



json.users do 
  json.set! @current_user.id do 
    json.extract! @current_user, :id, :username, :email, :number_tag, :color_id
  end
  @users.each do |user|
    json.set! user.id do
        # json.dmId dm_server.id
        json.extract! user, :id, :username, :email, :number_tag, :color_id
    end
  end
end



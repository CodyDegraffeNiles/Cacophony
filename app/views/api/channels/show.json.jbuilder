
json.channel do 
  json.extract! @channel, :id, :server_id, :name
end

json.messages do 
  @channel.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :channel_id, :author_id, :created_at, :body
    end
  end
end

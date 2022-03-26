json.channel do 
  json.extract! @channel, :id, :server_id, :name
end

json.messages do 
  @channel.messages.each do |message|
    json.set! message.id do
      est = Time.zone.utc_to_local(message.created_at)
      # Handle utc conversion issues to get true EST
      est = est + 4.hours
      json.author_name message.author.username
      json.created_at est.strftime("%m/%d/%Y %H:%M:%S %p")
      json.extract! message, :id, :channel_id, :author_id, :body
    end
  end
end

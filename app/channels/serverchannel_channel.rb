class ServerchannelChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    server_channel = Serverchannel.find(params[:id])
    stream_for server_channel
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

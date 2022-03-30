class Api::DmMessagesController < ApplicationController

  # Commented out material for live - messaging when ready.
  def create
    @dm = DmMessage.new(dm_params)
    # @server = Server.find_by(id: @message[:server_id])
    if @dm.save
      # ServerChannel.broadcast_to(@channel, @message)
      render :show
    else  
      render json: @dm.errors.full_messages, status: 400
    end
  end

  def destroy
    @dm = DmMessage.find_by(id: params[:id])
    # @channel = Channel.find_by(id: @message[:channel_id])
    @dm.destroy
    # ServerChannel.broadcast_to(@channel, @message.id)
    render :show
  end

  def update
    @dm = DmMessage.find_by(id: params[:id])
    # @channel = Channel.find_by(id: @message[:channel_id])
    if @dm.update(dm_params)
      # ServerChannel.broadcast_to(@channel, @message)
      render :show
    else  
      render json: @dm.errors.full_messages, status: 400
    end
  end

  private
  def dm_params
    params.require(:dm).permit(:dm_server_id, :author_id, :body)
  end

end

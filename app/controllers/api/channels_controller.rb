class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = params[:server_id]
    if @channel.save
      render :show
    else  
      flash[:errors] = @channel.errors.full_messages
    end
  end

  def delete
    @channel = Channel.find_by(id: params[:id])
    @channel.destroy
    render :show
  end

  def update
    ## Questionable like ServerMembership BeCareful!!!
    @channel = Channel.find_by(id: params[:id])
    if @channel.update(channel_params)
      render :show
    else  
      render json: @channel.errors.full_messages, status: 400
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:server_id, :name)
  end

end

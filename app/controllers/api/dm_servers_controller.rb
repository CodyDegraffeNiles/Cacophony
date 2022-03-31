class Api::DmServersController < ApplicationController

  def index
    @dm_servers = DmServer.all;
    @current_user = current_user;
    @dm_servers = @current_user.dm_servers if (@current_user)
    render :index
  end

  def create
    @dm_server = DmServer.new()
    @current_user = current_user
    if @dm_server.save
      render :new
    else  
      render json: @dm_server.errors.full_messages, status: 400
    end
  end

  def show
    @dm_server = DmServer.find_by(id: params[:id])
    @current_user = current_user
    render :show
  end

  def destroy
    @dm_server = Server.find_by(id: params[:id])
    @current_user = current_user
    @dm_server.destroy
  end

  private
  # def dm_server_params
  #   params.require(:dm_server).permit(:owner_id, :id)
  # end

  def userid
    params[:user]
  end
end

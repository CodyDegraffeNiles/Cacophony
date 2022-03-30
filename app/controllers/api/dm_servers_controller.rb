class Api::DmServersController < ApplicationController

  def index
    @dmservers = DmServer.all;
    @current_user = userid ? current_user : false;
    @dmservers = @current_user.dm_servers if (@current_user)
    render :index
  end

  def create
    @dmserver = DmServer.new(server_params)
    if @dmserver.save
      render :show
    else  
      render json: @dmserver.errors.full_messages, status: 400
    end
  end

  def show
    @dmserver = DmServer.find_by(id: params[:id])
    render :show
  end

  def destroy
    @dmerver = Server.find_by(id: params[:id])
    @dmserver.destroy
  end

  private
  def dm_server_params
    params.require(:dm_server).permit(:owner_id, :id)
  end

  def userid
    params[:user]
  end
end

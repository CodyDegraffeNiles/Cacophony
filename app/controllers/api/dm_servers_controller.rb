class Api::DmServersController < ApplicationController

  def index
    @dm_servers = DmServer.all;
    @current_user = userid ? current_user : false;
    @dm_servers = @current_user.dm_servers if (@current_user)
    @users = [];
    # Filter out all users to send to the json and reducers
    @dm_servers.each do |dm_server|
      dm_server.members.each do |user|
        if user.id != @current_user.id
          @users.push(user)
        end
      end
    end
    render :index
  end

  def create
    @dm_server = DmServer.new(server_params)
    if @dmserver.save
      render :show
    else  
      render json: @dm_server.errors.full_messages, status: 400
    end
  end

  def show
    @dm_server = DmServer.find_by(id: params[:id])
    render :show
  end

  def destroy
    @dm_server = Server.find_by(id: params[:id])
    @dm_server.destroy
  end

  private
  def dm_server_params
    params.require(:dm_server).permit(:owner_id, :id)
  end

  def userid
    params[:user]
  end
end

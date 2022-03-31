class Api::ServersController < ApplicationController

  def index
    @servers = Server.all;
    @current_user = userid ? current_user : false;
    @servers = @current_user.servers + @current_user.owned_servers if (@current_user)
    render :index
  end
  
  def create
    @server = Server.new(server_params)
    if @server.save
      render :show
    else   
      render json: @server.errors.full_messages, status: 400
    end
  end

  def show
    @server = Server.find_by(id: params[:id])
    render :show
  end

  def update
    @server = Server.find_by(id: params[:id])
    if @server.update(server_params)
      render :show
    else 
      render json: @server.errors.full_messages, status: 400
    end
  end

  def destroy 
    @server = Server.find_by(id: params[:id])
    @server.destroy; 
  end

  private
  def server_params
    params.require(:server).permit(:owner_id, :name, :public, :id)
  end

  def userid
    params[:user]
  end
end

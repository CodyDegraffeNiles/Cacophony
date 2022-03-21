class Api::ServersController < ApplicationController

  def create
    @server = Server.new(server_params)
    if @server.save
      render :show
    else   
      render json: @server.errors.full_messages, status: 400
    end
  end

  def show
    @server = Server.find_by[id: params[:id]]
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
    params.require(:sevrver).permit(:owner_id, :name, :public)
  end
end

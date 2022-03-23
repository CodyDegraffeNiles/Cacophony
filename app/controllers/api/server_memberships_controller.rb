class Api::ServerMembershipsController < ApplicationController

  def create
    @server_membership = ServerMembership.new(server_membership_params)
    @server = Server.find_by(id: @server_membership.server_id)
    if @server_membership.save
      render "api/servers/show"
    else    
      render json: @server_membership.errors.full_messages, status: 400
    end
  end

  def destroy
    @server_membership = ServerMembership.find_by(server_membership_parmas)
    @user = current_user
    @server_membership.destroy if @server_membersip.user_id === curent_user.id
    render 'api/users/show'
  end


  private
  def server_membership_params
    params.require(:server_membership).permit(:member_id, :server_id)
  end
end

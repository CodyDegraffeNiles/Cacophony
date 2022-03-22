class Api::ServerMembershipsController < ApplicationController

  def create
    @membership = ServerMembership.new(server_membership_params)
    @server = Server.find_by(id: @membership.server_id)
    if @membeship.save
      render "api/servers/show"
    else    
      render json: @membership.errors.full_messages, status: 400
    end
  end

  def destroy
    @membership = ServerMembership.find_by(server_membership_parmas)
    @user = current_user
    @membership.destroy if @membersip.user_id === curent_user.id
    render 'api/users/show'
  end


  private
  def server_membership_params
    params.require(:server_membership).permit(:member_id, :server_id)
  end
end

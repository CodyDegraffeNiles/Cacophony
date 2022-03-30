class Api::DmMembershipsController < ApplicationController
  def create
    @ = ServerMembership.new(dm_membership_params)
    @server = Server.find_by(id: @dm_membership.server_id)
    if @dm_membership.save
      # render "api/servers/show"
    else    
      render json: @dm_membership.errors.full_messages, status: 400
    end
  end

  def destroy
    @dm_membership = ServerMembership.find_by(dm_membership_params)
    @dm = DmServer.find_by(id: @dm_membership.dm_server_id)
    @dm_membership.destroy if @dm_membership.member_id === current_user.id
    # render 'api/servers/show'
  end


  private
  def dm_membership_params
    params.require(:dm_membership).permit(:member_id, :dm_server_id)
  end
end

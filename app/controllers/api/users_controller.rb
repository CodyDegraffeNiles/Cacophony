class Api::UsersController < ApplicationController
    def create 
    @user = User.new(user_params)
    if @user.save 
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find_by(id: params[:id])
      if @user.update(user_params)
        render :show
      else  
        render json: @user.errors.full_messages, status: 401
      end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def destroy 
    @user = User.find_by(id: params[:id])
    @user.destroy;
    render :show;
  end

  # Used to show associated users who are not in a dm with you already, so 
  # Uses Current User Id to filter.
  def index 
    server_peers = current_user.server_fellows
    dm_partners = current_user.dm_partners
    @users = server_peers.reject {|fellow| dm_partners.include?(fellow)}
    render :index;
  end
  
  private 
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

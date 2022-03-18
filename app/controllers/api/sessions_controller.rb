class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ["Invalid email/password combination"], status: 401
    else
    # Log them in and redirect them if we find them
      login(@user)
      render :show
    end

  end

  def destroy 
    if (current_user)
      logout
      render json: {message: 'logout successful.'}
    else  
      render json: ["No user to log out"], status: 404
    end
  end
end

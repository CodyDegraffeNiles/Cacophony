class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      render :show
    else  
      flash[:errors] = @message.errors.full_messages
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])
    @message.destroy
    render :show
  end

  def update
    @message = Message.find_by(id: params[:id])
    if @message.update(message_params)
      render :show
    else  
      render json: @message.errors.full_messages, status: 400
    end
  end

  private
  def message_params
    params.require(:message).permit(:channel_id, :author_id, :body)
  end

end


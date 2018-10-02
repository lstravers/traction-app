class UsersController < ApplicationController
  
  skip_before_action :verify_authentication
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @user = User.all
    render json: @users
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to new_session_path, notice: "Your account was created successfully. Please login with your email address."
    else
      render 'new'
    end
  end

  def update
    @user = User.find(params[:id])
  
    if @user.update(book_params)
      redirect_to @user
    else
      render 'edit'
    end
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.destroy
   
    redirect_to user_path(@user)
  end

  def verify_authentication
    user = authenticate_with_http_token do |token, options|
      User.find_by_auth_token(token)
    end

    unless user
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :username, :email, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end

end

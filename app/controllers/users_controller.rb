class UsersController < ApplicationController
<<<<<<< HEAD
  
  before_action :verify_authentication

=======
  before_action :verify_authentication
  
>>>>>>> 9c318a702eb9cc1a5e83e518baefe235abf9785f
  def index
    @user = User.all
    render json: @user
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
      render json: @user
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

  private
  def user_params
    params.permit(:email, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end

end

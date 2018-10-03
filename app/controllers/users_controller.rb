class UsersController < ApplicationController
  skip_before_action :verify_authentication
  #before_action :set_user, only: [:show, :update, :destroy]

  def index
    @user = User.all
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render json: @user
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
    params.require(:user).permit(:first_name, :last_name, :password, :email, :phone, :county, :address1, :address2, :city, :state, :zip, :admin, :contact_type, :date_auth, :admin_auth)
  end

  def set_user
    @user = User.find(params[:id])
  end

end

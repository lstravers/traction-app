class UsersController < ApplicationController
  skip_before_action :verify_authentication, only: [:create]
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @user = User.all
    render json: @user
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, notice: "Your account was created successfully. Please login with your email address."
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(book_params)
      redirect_to @user
    else
      render 'edit'
    end
  end
  
  def destroy
    @user.destroy
   
    redirect_to user_path(@user)
  end

  private
  def user_params
    params.permit(:first_name, :last_name, :password, :email, :phone, :county, :address1, :address2, :city, :state, :zip, :admin, :contact_type, :date_auth, :admin_auth)
  end

  def set_user
    @user = User.find(params[:id])
  end

end

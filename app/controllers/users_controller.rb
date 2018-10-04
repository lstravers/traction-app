class UsersController < ApplicationController
  #skip_before_action :authenticate_user! , only: [:create]
  before_action :set_user, only: [:show, :update]

  def index
    @user = User.all
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, notice: "Your account was created successfully."
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      redirect_to @user
    else
      render json: @user, notice: "Your account was updated successfully."
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |user_params|
      user_params.permit({ roles: [] }, :email, :password, :password_confirmation)
    end
  end

  private
  def user_params
    params.permit(:first_name, :last_name, :password, :email, :phone, :county, :address1, :address2, :city, :state, :zip, :admin, :contact_type, :date_auth, :admin_auth)
  end

  def set_user
    @user = User.find(params[:id])
  end

end

class UsersController < ApplicationController

  #skip_before_action :authenticate_user! , only: [:create]
  before_action :check_admin
  before_action :set_user, only: [:show, :update]

  def index
    #if current_user.admin?
      @users = User.all
    #else
      # redirect_to root_path, alert: "Access denied"
    #end
  end

  def show
    @user = User.find(params[:id])
    #render json: @user
  end

  def edit
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render users_path, notice: "Your account was created successfully."
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      redirect_to users_path, notice: "Your account was updated successfully."
    else
      render 'edit', notice: "Error in update."
    end
  end

  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.permit(:sign_up) do |user_params|
  #     user_params.permit({ roles: [] }, :email, :password, :password_confirmation)
  #   end
  # end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :email, :phone, :county, :address1, :address2, :city, :state, :zip, :admin, :contact_type, :date_auth, :admin_auth)
  end

  def set_user
    @user = User.find(params[:id])
  end
  def check_admin
    redirect_to root_path unless current_user.admin?
 end

end

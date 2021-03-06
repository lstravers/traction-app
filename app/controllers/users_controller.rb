class UsersController < ApplicationController
  helper_method :sort_column, :sort_direction

  #skip_before_action :authenticate_user! , only: [:create]
  before_action :check_admin
  before_action :set_user, only: [:show, :edit, :update, :toggle_admin, :toggle_deactivated]

  def index
    if search_params[:search_term_county].present?
      @users = User.search_by_county(search_params[:search_term_county]).order("#{sort_column} #{sort_direction}").page(params[:page]).per(20)
    elsif search_params[:search_term_city].present?
      @users = User.search_by_city(search_params[:search_term_city]).order("#{sort_column} #{sort_direction}").page(params[:page]).per(20)        
    elsif search_params[:search_term_last_name].present?
      @users = User.search_by_last_name(search_params[:search_term_last_name]).order("#{sort_column} #{sort_direction}").page(params[:page]).per(20)
    else
      @users = User.order("#{sort_column} #{sort_direction}").page(params[:page]).per(20)
    end
  end

  def new
    @user = User.new
  end

  def show
  end

  def edit
  end

  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.signup(@user).deliver_now
      redirect_to users_path, notice: "Your account was created successfully."
    else
      render :new, notice: "Something went wrong. Please try again."
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

  def toggle_deactivated
    @user.deactivated = !@user.deactivated?
    @user.save!
    redirect_to users_path
  end

  def toggle_admin
    @user.admin = !@user.admin?
    @user.save!
    redirect_to users_path
  end
  private
  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :password, :password_confirmation, :email, :phone, :county, :address1, :address2, :city, :state, :zip, :admin, :contact_type, :date_auth, :admin_auth)

  end

  def set_user
    @user = User.find(params[:id])
  end

  def check_admin
    if current_user 
      redirect_to root_path unless current_user.admin?
    else
      redirect_to root_path
    end 
  end

  def sort_column
    sortable_columns.include?(params[:column]) ? params[:column] : "last_name"
  end
  
  def sortable_columns
    ["first_name", "last_name", "password", "email", "phone", "county", "address1", "address2", "city", "state", "zip", "admin", "contact_type", "date_auth", "admin_auth", "deactivated"]
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end

  def search_params
    params.permit(:search_term_county, :search_term_city, :search_term_last_name)
  end

end

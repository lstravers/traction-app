class ApplicationController < ActionController::Base
   include ActionController::HttpAuthentication::Token::ControllerMethods
   before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, 
      :phone, :county, :address1, :address2, :city, :state, :zip, :admin, 
      :contact_type, :date_auth, :admin_auth])
  end

  def after_sign_in_path_for(resource)
    if current_user.admin?
      request.env['omniauth.origin'] || stored_location_for(resource) || home_index_path
    else
      request.env['omniauth.origin'] || stored_location_for(resource) || home_admin_path
    end
  end
 
  # protect_from_forgery with: :null_session 
  # helper_method :current_user
  # helper_method :logged_in?
  # helper_method :token_user
  # before_action :verify_authentication

  # #helper methods for devise gem
  # helper_method :user_signed_in?
  # helper_method :current_user  #current user signed-in
  # helper_method :user_session  #access session for this scope

  # def authenticate_user!
  #   unless token_user
  #     render @user.error { error: " FUERA! ACCESS DENIED" }, status: :unauthorized
  #    end
  # end
  

  # def verify_authentication
  #   unless token_user
  #    render json: { error: " FUERA! ACCESS DENIED" }, status: :unauthorized
  #   end
  # end
  
  # protected
  #  def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  #  end

  #  def logged_in?
  #   !!current_user
  # end

  # def token_user
  #  user = authenticate_with_http_token do |token, options|
  #  User.find_by_auth_token(token)
  #  end
  #  #temporal to storage user REMOVE when FE is ready with views
  #  @current_user=user

  #end

end

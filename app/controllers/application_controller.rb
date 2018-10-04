class ApplicationController < ActionController::Base
<<<<<<< HEAD
  # include ActionController::HttpAuthentication::Token::ControllerMethods
=======
   include ActionController::HttpAuthentication::Token::ControllerMethods
>>>>>>> 9fed33007b6946d0feba27a7fb422b6d90eb5bc2
  # protect_from_forgery with: :null_session 
  # helper_method :current_user
  # helper_method :logged_in?
  # helper_method :token_user
  # before_action :verify_authentication

<<<<<<< HEAD
  #  def verify_authentication
=======
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
>>>>>>> 9fed33007b6946d0feba27a7fb422b6d90eb5bc2
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

<<<<<<< HEAD
  # end
=======
  #end
>>>>>>> 9fed33007b6946d0feba27a7fb422b6d90eb5bc2
   

end

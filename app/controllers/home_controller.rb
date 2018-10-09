class HomeController < ApplicationController
    # skip_before_action :verify_authentication
    def admin
    end

    def kitserials
        @status=params[:status]
    end
    
end

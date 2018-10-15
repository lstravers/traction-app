class ReversalsController < ApplicationController
    before_action :check_admin
    helper_method :sort_column, :sort_direction
    
    #before_action :verify_authentication

    def index
        @reversals = Reversal.order("#{sort_column} #{sort_direction}").page(params[:page]).per(20)
        #render json: @reversal
    end

    def show
        @reversal = Reversal.find(params[:id])
        #render json: @reversal
      end
    # New
    def new
        redirect_to xxx_path, notice: 'You must be logged in to add a new reversal' if !(current_user)
        @reversal = Reversal.new
    end
    # Create
    def create
            @reversal = Reversal.new(reversal_params)
        
            if @reversal.save
            #   redirect_to xxx, notice: 'Kit was successfully recorded.'
            render json: @reversal, notice: 'Revesal was successfully recorded'
            else
                render json: @revesal, notice: 'Error creating reversal'
              render :new 
            end
    end
        
        #   no update available for this controller

        
          # DELETE only Admin
    def destroy
        # user_valid= User.find_by_email(current_user) after FE is bring screen

        if @current_user.admin

        @reversal = Reversal.find(params[:id])
            @reversal.destroy
            
            #   format.html { redirect_to XXX_url, notice: 'Kit was successfully deleted.' }
            render json: @revesal, notice: 'Reversal was successfully deleted.'
        else
            render json: @reversal, notice: "you don't have access to deleted."
        end


    end
        

    private

    def reversal_params
        params.require(:reversal).permit(:county, :town, :doses, :kit_type, :time_between)
        
    end

    def sort_column
        sortable_columns.include?(params[:column]) ? params[:column] : "county"
    end
      
    def sortable_columns
        ["county", "town", "doses", "kit_type", "time_between"]
    end

    def sort_direction
        %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
    end
    def check_admin
        if current_user 
        redirect_to root_path unless current_user.admin?
        else
            redirect_to root_path
        end 
    end

    def search_params
        params.permit(:search_term_county, :search_term_city)
    end

end

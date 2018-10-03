class ReversalsController < ApplicationController

    before_action :verify_authentication

    def index
        @reversal = Reversal.all
        render json: @reversal
    end

    def show
        @reversal = Reversal.find(params[:id])
        render json: @reversal
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

    def revesal_params
        params.require(:reversal).permit(:county, :town, :doses, :kit_type, :time_between )
        
    end

end

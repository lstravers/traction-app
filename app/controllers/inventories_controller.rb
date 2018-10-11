class InventoriesController < ApplicationController
    before_action :check_admin
    helper_method :sort_column, :sort_direction
    # before_action :verify_authentication

    def index

        if search_params[:search_term].present?
            @inventories = Inventory.search_by_expiration_date(search_params[:search_term]).order("created_at DESC").page(params[:page]).per(20)
        else
            @inventories = Inventory.order("#{sort_column} #{sort_direction}").page(params[:page]).per(20)
        end
        # if admin show all records
        # if current_user.admin
        # @inventories = Inventory.order("#{sort_column} #{sort_direction}").page(params[:page]).per(20)
        # render json: @inventory
        # else
        # volunteer only show their own records
        # @inventories = Inventory.where(user_id: current_user.id)
        # end
    end

    def show
        @inventory = Inventory.find(params[:id])
        # render json: @inventory
    end
    
    # New
    
    def new
        #redirect_to inventories_path, notice: 'You must be logged in to add a new kit' if !(current_user)
         @inventory = Inventory.new   
    end

    def edit
      
      if current_user.admin
        @inventory = Inventory.find(params[:id])
      else
        redirect_to inventories_path, notice: "Error: Only an administrator can edit the inventory."
      end
    end
    
    # Create
    def create

            @inventory = Inventory.new(inventory_params)
            @inventory[:distribution_date] = Date.today
        
            if @inventory.save
              redirect_to inventories_path, notice: 'Kit was successfully recorded.'
            # render json: @inventory, notice: 'Kit was successfully recorded'
            else
                # render json: @inventory, notice: 'Error creating Kit recorded'
              render :new 
            end
    end
        
    # Update only Admin
    def update
        if current_user.admin
        @inventory = Inventory.find(params[:id])
            if @inventory.update(inventory_params)
            redirect_to inventories_path, notice: 'Kit was successfully updated.'
            #render json: @inventory, notice: 'Kit was successfully updated.'
            else
              #render json: @inventory, notice: 'Error'
              redirect_to inventories_path, notice: "Error"
            end
        else
            #render json: @inventory, notice: "you don't have access to update."
            redirect_to inventories_path, notice: "You do not have access to update the inventory."
        end
    end
        
    # DELETE only Admin
    def destroy
        # user_valid= User.find_by_email(current_user) after FE is bring screen

        if current_user.admin

        @inventory = Inventory.find(params[:id])
            @inventory.destroy
            
            #   format.html { redirect_to XXX_url, notice: 'Kit was successfully deleted.' }
            # render json: @inventory, notice: 'Kit was successfully deleted.'
            redirect_to inventories_path, notice: "Kit was successfully deleted."
        else
            # render json: @inventory, notice: "you don't have access to deleted."
            redirect_to inventories_path, notice: "Kit was successfully deleted."
        end
    end
        

    private

    def inventory_params
        params.require(:inventory).permit(:user_id, :serial_num, :kit_type, :expiration_date, :distributed_date)
       
    end

    def sort_column
        sortable_columns.include?(params[:column]) ? params[:column] : "kit_type"
    end
      
    def sortable_columns
        ["kit_type", "expiration_date", "serial_num", "distributed_date"]
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
        params.permit(:search_term)
    end
end

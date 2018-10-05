class InventoriesController < ApplicationController
   # before_action :verify_authentication

    def index
        # if admin show all records
        # if current_user.admin
        @inventories = Inventory.all
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

end

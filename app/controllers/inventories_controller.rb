class InventoriesController < ApplicationController
    before_action :verify_authentication
    
    def index
        @inventories = Inventory.all
    end
    # New
    def new
        redirect_to xxx_path, notice: 'You must be logged in to add a new kit' if !(current_user)
        @inventory = Inventory.new
    end
    # Create
    def create
            @inventory = Invenroty.new(inventory_params)
        
            if @inventory.save
            #   redirect_to xxx, notice: 'Kit was successfully recorded.'
            render json: @inventory, 'Kit was successfully recorded'
            else
              render :new 
            end
    end
        
          # Update
    def update
            if @inventory.update(inventory_params)
            #   redirect_to xxxx, notice: 'Kit was successfully updated.'
            render json: @inventory, notice: 'Kit was successfully updated.'
            else
              render json: @inventory, notice: 'Error'
            end
    end
        
          # DELETE 
    def destroy
            @inventory.destroy
            XXXX do |format|
            #   format.html { redirect_to XXX_url, notice: 'Kit was successfully deleted.' }
            render json: @inventory, notice: 'Kit was successfully deleted.'
        end
          end

    private

    def inventory_parms
        params.require(:inventory).permit(:user_id, :serial_id, :number_kits, :kit_type, :date_expiration)
    end

end

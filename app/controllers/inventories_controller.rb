class InventoriesController < ApplicationController
    def index
        @inventory = Inventory.all
    end
    def new
        
    end
    def update
    end

    private

    def inventory_parms
    end

end

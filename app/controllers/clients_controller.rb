
class ClientsController < ApplicationController
    skip_before_action :verify_authenticity_token

    before_action :set_client, only: [:show, :edit, :destroy]
    

    def info
        @clients = Client.all
    end

    def show

    end

    def new

    end

    def edit

    end

    def create
        @client = params
        @user_id = current_user.id
        # @user_id = "6" only for local test
        
        @dateob= @client["date_of_birth"]+"/01/01"
        @client_c = ClientConfidential.new(first_name: @client["first_name"],
            last_name: @client["last_name"], date_of_birth: @dateob, 
             )
        

        if @client_c.save
        end 

        #create record for client associate with confidential id
        @client2 = Client.new(user_id: @user_id, city: @client["city"],
            county: @client["county"], 
            first_kit: @client["first_kit"],
            client_confidential_id: @client_c.id  )
        
        if @client2.save
        end 
        # create reversal record
        @county = @client["rcounty"]
        @doses = @client["rdoses"]
        @kit = @client["rkit_type"]
        @town = @client["rtown"]
        @time = @client["rtime_between"]
        :rtime_between
        @reversal = Reversal.new(county: @county, doses: @doses,
            kit_type: @kit, town: @town, time_between: @time)
        
        if @reversal.save
          
        end 
        # update/create inventory
        @serial = @client["serial_num"]

        @inventory = Inventory.find_by_serial_num(@serial)

        if @inventory.update(user_id: @user_id, client_id: @client2.id, 
            distributed_date: @client["distributed_date"])

          else
            @inventory = Inventory.new(user_id: @user_id, client_id: @client2.id, 
                distributed_date: @client["distributed_date"], kit_type: @client["kit_type"],
                serial_num: @client["serial_num"] )
            if @inventory.save
                
            end 
          end

    end

    def update

    end
# @client = Client.new(client_params)
        #create record for client confidential
private
    # def set_client
    #     @client = Client.find(params[:id])
    # end

    # def rubified_params
    #     new_params = {}
    #     client_params.each do |k,v|
    #         new_params[k.to_s.gsub(/[[:upper:]]/, '_\0').downcase.to_sym] = v
    #     end
    #     new_params[:user_id] = current_user.id
    #     return new_params
    # end
end

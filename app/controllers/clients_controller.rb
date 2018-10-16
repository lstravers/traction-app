class ClientsController < ApplicationController
    before_action :verify_authenticity_token
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
        #@user_id = "6" #only for local test
        
    
        @dateob= @client["date_of_birth"]
        @dateob = @dateob.to_s + "/01/01"
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
        
        
            
            @aserial = @client["serial_num"]
            @atype = @client["kit_type"]
           
            @aserial.zip @atype
            @aserial.zip(@atype).each do |e, t|
                @kit_t = t
                @serial = e

                @inventory = Inventory.find_by_serial_num(@serial)

                if @inventory 
                    @inventory.update(user_id: @user_id, client_id: @client2.id, 
                    distributed_date: @client["distributed_date"])

                else
                    @inventory = Inventory.new(user_id: @user_id, client_id: @client2.id, 
                        distributed_date: @client["distributed_date"], kit_type: @kit_t,
                        serial_num: @serial )
                    if @inventory.save  
                    end 
                end
            end    
        #end
    end
  
    

     protected
     

     def verify_authenticity_token
        
        token = current_user.auth_token
        @user = User.find_by_auth_token(token)
       
        unless @user
            render json: { error: "ACCESS DENIED" }, status: :unauthorized
            end
       
     end



    
end

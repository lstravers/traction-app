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
        @client = params["client"]
        @user_id = current_user[:id]

        # @client = Client.new(client_params)
        #create record for client confidential
        @client_confidential = Client_confidential.new(user_id: @user_id, first_name: @client.first_name,
            last_name: @client.last_name, date_of_birth: @client.date_of_birth, 
             )
        
        if @client_confidential.save
            render "api/results/show.json", status: :created
        else
            render json: @result.errors, status: :unprocessable_entity
        end 

        #create record for client associate with confidential id
        @client2 = Client.new(user_id: @user_id, city: @client.city,
            county: @client.county, 
            cliente_confidential_id: @client_confidential.client_confidential_id,
            first_kit: @client.first_kit  )
        
        if @client2.save
            render "api/results/show.json", status: :created
        else
            render json: @result.errors, status: :unprocessable_entity
        end 
        # create reversal record
        @county = @client.rcounty
        @doses = @client.rdoses
        @kit = @client.rkit_type
        @town = @client.rtown
        @time = @client.rtime_between
        :rtime_between
        @reversal = Reversal.new(user_id: @user_id, county: @county, doses: @doses,
            kit_type: @kit, town: @town, time_between: @time)
        
        if @reversal.save
            render "api/results/show.json", status: :created
        else
            render json: @result.errors, status: :unprocessable_entity
        end 
        # update/create inventory
        @serial = @client.serial_num

        @inventory = Inventory.find_by_serial_num(@serial)


        if @inventory.update(user_id: @user_id, client_id: @client2.id, 
            distributed_date: @client.distributed_date)
            redirect_to users_path, notice: "Your account was updated successfully."
          else
            @inventory = Inventory.new(user_id: @user_id, client_id: @client2.id, 
                distributed_date: @client.distributed_date, kit_type: @client.kit_type,
                serial_num: @client.serial_num )
            render 'edit', notice: "New Record"
            if @inventory.save
                render "api/results/show.json", status: :created
            else
                render json: @result.errors, status: :unprocessable_entity
            end 
          end

    end

    def update

    end

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

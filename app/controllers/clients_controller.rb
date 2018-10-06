class ClientsController < ApplicationController
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
        @client = Client.new(client_params)

        if @user.save
            render json: @user, status: :created, notice: "Your account was created successfully."
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def update

    end

private
    def set_client
        @client = Client.find(params[:id])
    end

    def client_params
        new_params = {}
        params.each do |k,v|
            new_params[k.to_s.gsub(/[[:upper:]]/, '_\0').downcase.to_sym] = v
        end
        new_params.permit(:city_town, :county, :first_kit, :user_id, client_confidential: [:first_name, :last_name, :date_of_birth])
    end

end

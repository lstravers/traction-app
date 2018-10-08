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
        @client = Client.new(rubified_params)

        if @client.save
            render json: @client, status: :created, notice: "Your account was created successfully."
        else
            render json: @client.errors, status: :unprocessable_entity
        end
    end

    def update

    end

private
    def set_client
        @client = Client.find(params[:id])
    end

    def client_params
        params.permit(:city, :county, :firstKit, :user_id)
    end

    def rubified_params
        new_params = {}
        client_params.each do |k,v|
            new_params[k.to_s.gsub(/[[:upper:]]/, '_\0').downcase.to_sym] = v
        end
        new_params[:user_id] = current_user.id
        return new_params
    end
end

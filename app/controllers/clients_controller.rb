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

        if @client.save
            render 'new'
        else
            render 'new', notice: "Not able to create"
    end

    def update

    end

private
    def set_client
        @client = Client.find(params[:id])
    end

    def client_params
        params.require(:clients).permit(:city, :county, :first_kit, :user_id, client_confidential: [:first_name, :last_name, :date_of_birth])
    end

end

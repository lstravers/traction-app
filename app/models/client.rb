class Client < ApplicationRecord
  belongs_to :client_confidential
  belongs_to :user
end

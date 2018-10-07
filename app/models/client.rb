class Client < ApplicationRecord
  has_many :inventories
  has_one :client_confidential, dependent: :destroy
  accepts_nested_attributes_for :client_confidential
end

class Client < ApplicationRecord
  has_many :inventories
  has_one :client_confidential, dependent: :destroy
  accepts_nested_attributes_for :client_confidential

  include PgSearch
  pg_search_scope :search_by_county, :against => [:county]
  pg_search_scope :search_by_city, :against => [:city]
  pg_search_scope :search_by_user, :against => [:user_id]
  pg_search_scope :search_by_icounty, :associated_against => { :inventory => :county }
  pg_search_scope :search_by_icity, :associated_against => { :inventory => :city }
end

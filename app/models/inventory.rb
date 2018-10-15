class Inventory < ApplicationRecord
  belongs_to :user
  belongs_to :client
  include PgSearch

  pg_search_scope :search_by_icounty, :associated_against => { :client => :county }
  pg_search_scope :search_by_icity, :associated_against => { :client => :city }
end

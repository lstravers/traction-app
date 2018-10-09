class Inventory < ApplicationRecord
  belongs_to :user

  include PgSearch
  pg_search_scope :search_by_user, :against => [:user_id]
  
end

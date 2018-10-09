class Reversal < ApplicationRecord
    include PgSearch
    pg_search_scope :search_by_county, :against => [:county]
    pg_search_scope :search_by_town, :against => [:town]
    pg_search_scope :search_by_user, :against => [:user_id]
    
end

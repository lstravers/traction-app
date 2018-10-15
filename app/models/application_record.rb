class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  include PgSearch
  pg_search_scope :search_by_county, :against => [:county]
  pg_search_scope :search_by_city, :against => [:city]
  pg_search_scope :search_by_last_name, :against => [:last_name]
  pg_search_scope :search_by_town, :against => [:town]
  pg_search_scope :search_by_distributed_date, :against => [:distributed_date]
  pg_search_scope :search_by_expiration_date, :against => [:expiration_date]
  
end

class User < ApplicationRecord
  has_secure_token :auth_token
  has_secure_password
  has_many :inventories

  validates :email, presence: true, uniqueness: true
  validates :email_confirmation, presence: true
  
  validates :password, presence: true, length:{minimum: 8}
  validates :password_confirmation, presence: true


end

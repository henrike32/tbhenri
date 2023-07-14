class User < ApplicationRecord
  has_many :apartments

  devise  :database_authenticatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
end
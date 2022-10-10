class Landlord < ApplicationRecord
    has_many :tenants
    has_many :apartments, through: :tenants

    validates :username, presence: true
    validates :email, presence: true
    # validates :password_digest, presence: true
end

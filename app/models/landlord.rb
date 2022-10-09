class Landlord < ApplicationRecord
    has_many :tenants
    has_many :apartments, through: :tenants

    validates :username, presence: true
end

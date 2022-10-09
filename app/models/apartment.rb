class Apartment < ApplicationRecord
    has_many :tenants
    has_many :landlords, through: :tenants

    has_many :houses
end

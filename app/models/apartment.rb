class Apartment < ApplicationRecord
    belongs_to :landlord
    has_many :rooms

    # has_many :houses
end

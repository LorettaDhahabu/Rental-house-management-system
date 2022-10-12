class Apartment < ApplicationRecord
    belongs_to :landlord
    has_many :rooms
end

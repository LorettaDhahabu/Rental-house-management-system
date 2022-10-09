class Tenant < ApplicationRecord
    belongs_to :landlord
    belongs_to :apartment
    belongs_to :house

    validates :age, numericality: { greater_than_or_equal_to: 18 }
    validates :gender, inclusion: {in: %w(Male Female)}
end

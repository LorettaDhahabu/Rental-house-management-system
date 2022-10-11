class Landlord < ApplicationRecord
    belongs_to :user
    has_many :apartments

    validates :username, presence: true
    validates :email, presence: true
    # validates :password_digest, presence: true
end

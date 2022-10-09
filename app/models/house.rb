class House < ApplicationRecord
    belongs_to :apartment

    # belongs_to :tenant
    has_one :tenant
end

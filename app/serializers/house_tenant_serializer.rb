class HouseTenantSerializer < ActiveModel::Serializer
  attributes :id, :house_no, :apartment_id


  has_many :tenants
end

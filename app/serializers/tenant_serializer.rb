class TenantSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender, :contact, :landlord_id, :apartment_id
end

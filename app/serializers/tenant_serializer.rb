class TenantSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender, :contact, :house_no, :landlord_id, :apartment_id
  
end

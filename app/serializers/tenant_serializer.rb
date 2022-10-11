class TenantSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender, :contact, :room_id

  # belongs_to :apartment
  
end

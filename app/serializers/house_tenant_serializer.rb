class HouseTenantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :landlord_id

  has_many :rooms
end

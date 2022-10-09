class ApartmentHouseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price, :houses

  has_many :tenants

  # has_one: tenant
end

class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price
end

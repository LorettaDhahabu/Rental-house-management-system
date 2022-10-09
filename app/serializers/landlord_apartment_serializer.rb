class LandlordApartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest

  has_many :apartments
end

class LandlordSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest
end

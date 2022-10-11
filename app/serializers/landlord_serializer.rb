class LandlordSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :email, :user_id
end

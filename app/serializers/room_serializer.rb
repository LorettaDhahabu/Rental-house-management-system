class RoomSerializer < ActiveModel::Serializer
  attributes :id, :room_no, :apartment_id, :price
end

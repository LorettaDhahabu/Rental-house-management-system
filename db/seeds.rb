# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts "Start Seeding...."
# create user data with faker gem
5.times do 
    Landlord.create(name: Faker::Name.name, username: Faker::Internet.username, email: Faker::Internet.email, password_digest: "password")
end

# create apartment data with faker gem
5.times do
    Apartment.create(name: Faker::Address.community, image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['apartment']), description: Faker::Lorem.paragraph, price: Faker::Number.number(digits: 4))
end

# create tenant data with faker gem
# 5.times do
#     Tenant.create(name: Faker::Name.name, age: Faker::Number, gender:"male", contact: Faker::PhoneNumber, landlord_id: Faker::Number, apartment_id: Faker::Number)
# end

# create house data with faker gem
# 5.times do
#     House.create!(apartment_id: apartment.id, house_no: Faker::Number)
# end

# Landlord.all.each do |landlord|
#   rand(1..3).times do
#     # get a random power
#     apartment = Apartment.find(Apartment.pluck(:id).sample)

#     Tenant.create!(landlord_id: landlord.id, apartment_id: apartment.id, name: Faker::Name.name, age: rand(18..100), gender: [:Male, :Female].sample)
#   end
# end

Landlord.all.each do |landlord|
  rand(1..3).times do
    # get a random apartment
    apartment = Apartment.find(Apartment.pluck(:id).sample)

    Tenant.create!(landlord_id: landlord.id, apartment_id: apartment.id, name: Faker::Name.name, age: rand(18..100), gender: [:Male, :Female].sample, contact: Faker::PhoneNumber, house_no: Faker::Number)

    # House.create!(apartment_id: apartment.id,  house_no: Faker::Number)
  end
end

puts "End of Seeding...."
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

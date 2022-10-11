# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts "Start Seeding...."
# use faker to create 10 users
User.create!([
  {
    username: "Dege",
    password_digest: "dhahabu123",
  },

])

Landlord.create!([
  {
    name: "Shuku Nickson",
    phone_number:"0724435642",
    email: "shuku@gmail.com"
  },
  {
    name: "Sonjo Kevin",
    phone_number:"0724435642",
    email: "sonjo@gmail.com"
  },
  {
    name: "Sifa Eric",
    phone_number:"0724435642",
    email: "sifa@gmail.com"
  },
  {
    name: "Konde Jonathan",
    phone_number:"0724435642",
    email: "konde@gmail.com"
  },
  {
    name: "Wara Nelson",
    phone_number:"0724435642",
    email: "wara@gmail.com"
  },

])

Apartment.create!([
  {
    name: "Peace Waters",
     image:"https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description:"Entire serviced apartment hosted by HostinGroup 

6 guests3 bedrooms3 beds3.5 baths",
    price:"12000"
  },
  {
    name: "The Fedora",
     image:"https://images.unsplash.com/photo-1561228647-c97a76d0fd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description:"Water ... that is the key element here and it is nos only represented in the colouf of the carpet, walls, art works in the living room and bathrooms palet´s colours",
    price:"15000"
  },
  {
    name: "Platinum Oaks",
     image:"https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description:"The design of this place just make you have a truly connection with the precious natural resource while at the same time it has all the elements for an unforgettable stay",
    price:"10000"
  },
  {
    name: "Safe Homes",
     image:"https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description:"Accent pendant lighting and rich textures are complemented by subtle yet distinguished designer features. The community's shared spaces further enrich the artful style with a sky deck overlooking Papago,",
    price:"13000"
  },
  {
    name: "The Griffin",
    image:"https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description:"The Griffin is an art gallery by day and VIP lounge by night. Daylight illuminates bright, airy one and two-bedroom homes, where you’ll find expansive quartz countertops and islands, ",
    price:"11000"
  },

])

Room.create!([
  {
   room_no: "110",
    
  },
  {
    room_no: "111",
    price:""
  },
  {
    room_no: "110",
    
  },
  {
    room_no: "110",
    
  },
  {
    room_no: "110",
    
  },

])

Tenant.create!([
  {
    name: "Sande Nickson",
    age:"23",
    gender:"Male",
    contact:"0724435642"
  },
  {
    name: "Tsofa Kevin",
    age:"43",
    gender:"Female",
    contact:"0724435642",
    
  },
  {
    name: "Maisha Eric",
    age:"27",
    gender:"Female",
    contact:"0724435642",
    
  },
  {
    name: "Sanita Jonathan",
    age:"40",
    gender:"Male",
   contact:"0724435642",
    
  },
  {
    name: "Fikiri Nelson",
    age:"33",
    gender:"Female",
    contact:"0724435642",
   
  },

])

Payment.create!([
  {
    invoice_no: "12345",
    amount_paid: "15000",
    date:""
  },
    {
    invoice_no: "45677",
    amount_paid: "15000",
    date:""
  },

    {
    invoice_no: "89774",
    amount_paid: "15000",
    date:""
  },


])

User.all.each do |user|
  rand(1..2).times do
    # get a random landlord
    landlord = Landlord.find(Landlord.pluck(:id).sample)

    Landlord.create!(user_id: user.id, name: landlord.name, phone_number: landlord.phone_number, email: landlord.email)
  end
end


Landlord.all.each do |landlord|
  rand(1..2).times do
    # get a random apartment
    apartment = Apartment.find(Apartment.pluck(:id).sample)

    Apartment.create!(landlord_id: landlord.id, name: apartment.name, image: apartment.image, description: apartment.description, price: rand(10000..15000))

  end
end

Apartment.all.each do |apartment|
  rand(1..2).times do
    # get a random apartment
    room = Room.find(Room.pluck(:id).sample)

    Room.create!(apartment_id: apartment.id, room_no: room.room_no)

  end
end


# # use faker to create 10 tenants
Room.all.each do |room|
  rand(1..2).times do
    # get a random apartment
    tenant = Tenant.find(Tenant.pluck(:id).sample)

    Tenant.create!(room_id: room.id, name: tenant.name, age: rand(18..100), gender: [:Male, :Female].sample, contact: tenant.contact)

    # House.create!(apartment_id: apartment.id,  house_no: Faker::Number)
  end
end


Tenant.all.each do |tenant|
  rand(1..2).times do
    # get a random apartment
    payment = Payment.find(Payment.pluck(:id).sample)

    Payment.create!(tenant_id: tenant.id, amount_paid: rand(10000..15000), invoice_number: payment.invoice_no(digits: 4), date: Faker::Date.between(from: 2.days.ago, to: Date.today))

  end
# end

puts "End of Seeding...."

# Landlord.all.each do |landlord|
#   rand(1..3).times do
#     # get a random apartment
#     apartment = Apartment.find(Apartment.pluck(:id).sample)

#     Tenant.create!(landlord_id: landlord.id, apartment_id: apartment.id, name: Faker::Name.name, age: rand(18..100), gender: [:Male, :Female].sample, contact: Faker::PhoneNumber, house_no: Faker::Number)

#     # House.create!(apartment_id: apartment.id,  house_no: Faker::Number)
#   end
# end

#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

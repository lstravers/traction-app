# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Client.delete_all
ClientConfidential.delete_all
Inventory.delete_all
Reversal.delete_all

5.times do
  User.create!(
    first_name: "test",
    last_name: Faker::Superhero.name,
    password: "12345678",
    email: Faker::Internet.safe_email,
    phone: Faker::PhoneNumber.phone_number,
    county: Faker::Address.city,
    address1: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state_abbr,
    zip: Faker::Address.zip_code,
    admin: Faker::Boolean.boolean,
    date_auth: Faker::Date.backward(365),
    admin_auth: Faker::Date.backward(365)
  )
end

50.times do
  Client.create!(
    first_kit: Faker::Boolean.boolean,
    city: Faker::Address.city,
    county: Faker::Address.city,
    user_id: Faker::Number.between(1, 5)
  )
end

50.times do
  ClientConfidential.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    date_of_birth: Faker::Date.birthday(18, 65),
    client_id: Faker::Number.between(1, 5)
  )
end

100.times do
  Inventory.create!(
    serial_num: "NCHRC-" + Faker::Number.number(6),
    kit_type: "IM",
    user_id: Faker::Number.between(1, 5),
    client_id: "5",
    expiration_date: Faker::Date.forward(365)
  )
end

15.times do
  Reversal.create!(
    county: Faker::Address.city,
    town: Faker::Address.city,
    doses: Faker::Number.between(1, 10),
    kit_type: "IM",
    time_between: Faker::Number.between(1, 10)
  )
end

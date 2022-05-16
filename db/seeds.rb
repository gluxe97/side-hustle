# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#User
#Name string
#Username string
#Email string
#Password string
#Password_digest




# Seed file logic reminder

puts "starting seeding..."

# destroy from dependent->independent
User.destroy_all

puts "destroying previous data..."

puts "seeding new data..."
# create from independent->dependent

puts "seeding new users..."

User.create(
    name: "gabriel",
    username: "gluxe",
    email: "dre2059570@gmail.com",
    password: "0000"
    )

User.create(
    name: "eric",
    username: "ericg",
    email: "ericg97@gmail.com",
    password: "0001"
    )

puts "Done Seeding..."

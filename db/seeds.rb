# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  demoUser = User.create(
      email: "KoalaDemo2@caveman.com",
      username: "DemoUser",
      password: "DropBear")

  # testServer = Server.create(
  #   name: "Sleepy Koalas",
  #   owner_id: 1, 
  #   public: false)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



#Destroy all of the databases
  User.destroy_all
  Server.destroy_all
  Message.destroy_all
  ServerMembership.destroy_all
  Channel.destroy_all

#Rest the ids of all databases
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('servers')
  ApplicationRecord.connection.reset_pk_sequence!('messages')
  ApplicationRecord.connection.reset_pk_sequence!('sever_memberships')
  ApplicationRecord.connection.reset_pk_sequence!('channels')

# Demo user
  demoUser = User.create(
      email: "KoalaDemo2@caveman.com",
      username: "DemoUser",
      password: "DropBear")

#Imperial Fists
  dorn = User.create(
      email: "GoldenMan@fortify.com",
      username: "Dorn",
      password: "painGlove")

  archamus = User.create(
    email: "oldmanWorkshard@fotify.com",
    username: "Prateorian",
    password: "oldman"
  )

  sigismund = User.create(
    email: "advance@fotify.com",
    username: "Sigismund",
    password: "censured"
  )

  dias = User.create(
    email: "selectiveShots@fotify.com",
    username: "Cambia Diaz",
    password: "no step bakc"
  )

  kestros = User.create(
    email: "turrets@fotify",
    username: "Sergeant 64th squad",
    password: "glow up time"
  )

  #Primarchs
  perturabo = User.create(
      email: "IronMan@fortify.com",
      username: "Perto",
      password: "decimate"
  )

  russ = User.create(
      email: "SpaceWolf@fortify.com",
      username: "Leman Russ",
      password: "canine"
  )

  khan = User.create(
      email: "speedForce@hhl.com",
      username: "Khan",
      password: "need for speed"
  )

  alpharius = User.create(
    email: "omegeonisdead@cannon.com",
    username: "Alpharius",
    password: "noreallyIam"
  )

# TA's 

  taylor = User.create(
    email: "taytay23@yahoo.com",
    username: "Mursoff",
    password: "best circle leader"
  )

  sam  = User.create(
    email: "samgoestoVegas@aa.com",
    username: "Sam Songs",
    password: "python master"
  )
  spencer = User.create(
      email: "lasicone.com",
      username: "Lasicone",
      password: "great TA"
  )

  paulo = User.create(
    email: "vaction@aa.com",
    username: "Paulo B",
    password: "peruisthebest",
  )

  chris = User.create(
    email: "stonks@aa.com",
    username: "Stonk Master",
    password: "Chillest TA"
  )

  ayce = User.create(
    email: "ayce@aa.com",
    username: "Ayce machine",
    password: "Jessie's highs are actual highs"
  )

  mike = User.create(
    email: "candaman@aa.com",
    username: "Mike the mad Lad",
    password: "Discord is sus"
  )

# AA Classmates 
  nick = User.create(
      email: "coffeMan@thevere.com",
      username: "NickP",
      password: "coffeeMan")

  brandon = User.create(
    email: "sus@uber.com",
    username: "Uber Driver",
    password: "isteallaptops",
  )

  jwong = User.create(
      email: "@hhl.com",
      username: "Jwong",
      password: "Dance dance revolution"
  )

  mikey = User.create(
      email: "iwishhewashere@gmail.com",
      username: "Gone too soon",
      password: "Very nice guy!"
  )

  ## Williams crew

  sammy = User.create(
    email: "masterofthedot@gov.com",
    username: "RichGameBuddy2",
    password: "login76"
  )

  paul = User.create(
    email: "LostArk@stats.com",
    username: "Welp76",
    password: "teacherofLegend"
  )

  derek = User.create(
    email: "whereismyteam@top.com",
    username: "DOMEGAULCZ",
    password: "monkeyman23"
  )

  jian = User.create(
    email: "googlemoney@check.com",
    username: "Poker Genius",
    password: "checker651"
  )

  anna = User.create(
    email: "aagrad@facebook.com",
    username: "Rylost",
    password: "superhelpful"
  )

  monkey_man = User.create(
    email: "whocheckedthisguy@monkeyman.com",
    username: "Monkey Man",
    password: "monkeyman126"
  )

  # Servers to 
  imperial_fists = Server.create(
    owner_id: dorn.id,
    name: "Imperial Fists",
    public: true,
    )

  terra = Server.create(
    owner_id: dorn.id,
    name: "Terra",
    public: true
  )

  aaTas = Server.create(
    owner_id: mike.id,
    name: "The Best TAs",
    public: false,
  )

  cohort = Server.create(
    owner_id: nick.id,
    name: "Cohort of Legend",
    public: true
  )

  williams = Server.create(
    owner_id: sammy.id,
    name: "The Darkest Williams College",
    public: true
  )

  ## Public Servers to show off Search Bar

  public1 = Server.create(
    owner_id: monkey_man.id,
    name: "Tree Club",
    public: true
  )

  public2 = Server.create(
    owner_id: monkey_man.id,
    name: "Seeding data is fun!",
    public: true
  )

  public3 = Server.create(
    owner_id: monkey_man.id,
    name: "O(N) run time",
    public: true
  )

  public4 = Server.create(
    owner_id: monkey_man.id,
    name: "Don't Join!",
    public: true
  )


# Server Memberships

  ServerMembership.create(server_id: imperial_fists.id , member_id: archamus.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id:sigismund.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id: dias.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id: kestros.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id: perturabo.id)
  ServerMembership.create(server_id: imperial_fists.id , member_id: demoUser.id)
  ServerMembership.create(server_id: terra.id, member_id: perturabo.id)
  ServerMembership.create(server_id: terra.id, member_id: russ.id)
  ServerMembership.create(server_id: terra.id, member_id: khan.id)
  ServerMembership.create(server_id: terra.id, member_id: alpharius.id)
  ServerMembership.create(server_id: terra.id, member_id: monkey_man.id)
  ServerMembership.create(server_id: terra.id, member_id: dias.id)
  ServerMembership.create(server_id: terra.id, member_id: sigismund.id)
  ServerMembership.create(server_id: terra.id, member_id: kestros.id)
  ServerMembership.create(server_id: terra.id, member_id: demoUser.id)
  ServerMembership.create(server_id: aaTas.id, member_id: taylor.id)
  ServerMembership.create(server_id: aaTas.id, member_id: sam.id)
  ServerMembership.create(server_id: aaTas.id, member_id: spencer.id)
  ServerMembership.create(server_id: aaTas.id, member_id: ayce.id)
  ServerMembership.create(server_id: aaTas.id, member_id: paulo.id)
  ServerMembership.create(server_id: aaTas.id, member_id: brandon.id)
  ServerMembership.create(server_id: aaTas.id, member_id: chris.id)
  ServerMembership.create(server_id: aaTas.id, member_id: demoUser.id)
  ServerMembership.create(server_id: cohort.id, member_id:  brandon.id)
  ServerMembership.create(server_id: cohort.id, member_id: jwong.id)
  ServerMembership.create(server_id: cohort.id, member_id: mikey.id)
  ServerMembership.create(server_id: cohort.id, member_id: mike.id)
  ServerMembership.create(server_id: cohort.id, member_id: anna.id)
  ServerMembership.create(server_id: cohort.id, member_id: demoUser.id)
  ServerMembership.create(server_id: williams.id, member_id: paul.id)
  ServerMembership.create(server_id: williams.id, member_id: derek.id)
  ServerMembership.create(server_id: williams.id, member_id: jian.id)
  ServerMembership.create(server_id: williams.id, member_id: anna.id)
  ServerMembership.create(server_id: williams.id, member_id: demoUser.id)
  ServerMembership.create(server_id: williams.id, member_id: monkey_man.id)
  ServerMembership.create(server_id: public1.id, member_id: anna.id)
  ServerMembership.create(server_id: public1.id, member_id: mike.id)
  ServerMembership.create(server_id: public1.id, member_id: kestros.id)
  ServerMembership.create(server_id: public2.id, member_id: paulo.id)
  ServerMembership.create(server_id: public2.id, member_id: chris.id)
  ServerMembership.create(server_id: public3.id, member_id: khan.id)
  ServerMembership.create(server_id: public3.id, member_id: paul.id)
  ServerMembership.create(server_id: public4.id, member_id: alpharius.id)

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_30_035306) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.integer "server_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "server_id"], name: "index_channels_on_name_and_server_id", unique: true
    t.index ["server_id"], name: "index_channels_on_server_id"
  end

  create_table "dm_memberships", force: :cascade do |t|
    t.integer "member_id", null: false
    t.integer "dm_server_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id", "dm_server_id"], name: "index_dm_memberships_on_member_id_and_dm_server_id", unique: true
  end

  create_table "dm_messages", force: :cascade do |t|
    t.integer "dm_server_id", null: false
    t.integer "author_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_dm_messages_on_author_id"
    t.index ["dm_server_id"], name: "index_dm_messages_on_dm_server_id"
  end

  create_table "dm_servers", force: :cascade do |t|
    t.integer "owner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_dm_servers_on_owner_id"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "channel_id", null: false
    t.integer "author_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_messages_on_author_id"
    t.index ["channel_id"], name: "index_messages_on_channel_id"
  end

  create_table "server_memberships", force: :cascade do |t|
    t.integer "member_id", null: false
    t.integer "server_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id", "server_id"], name: "index_server_memberships_on_member_id_and_server_id", unique: true
  end

  create_table "servers", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "name", null: false
    t.boolean "public", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id", "name"], name: "index_servers_on_owner_id_and_name", unique: true
    t.index ["owner_id"], name: "index_servers_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "number_tag", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "color_id", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username", "number_tag"], name: "index_users_on_username_and_number_tag", unique: true
    t.index ["username"], name: "index_users_on_username"
  end

end

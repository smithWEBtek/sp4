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

ActiveRecord::Schema.define(version: 20180214190217) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appts", force: :cascade do |t|
    t.integer "customer_id"
    t.integer "service_id", default: 1
    t.date "appt_date"
    t.datetime "appt_start"
    t.datetime "appt_end"
    t.text "appt_note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "assets", force: :cascade do |t|
    t.string "title"
    t.string "category"
    t.string "description"
    t.string "format"
    t.string "location"
    t.string "url", default: "no_url_given"
  end

  create_table "customers", force: :cascade do |t|
    t.text "firstname"
    t.text "lastname"
    t.text "fullname", default: "asdf"
    t.text "address"
    t.text "city"
    t.text "state"
    t.text "zip"
    t.text "email"
    t.text "phone1"
    t.text "phone2"
    t.text "phone3"
    t.text "pno_brand"
    t.text "pno_model"
    t.text "pno_serial"
    t.text "pno_type"
    t.text "about"
    t.date "last_meeting"
    t.date "last_reminder"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.integer "title"
    t.text "description"
    t.integer "cost"
    t.integer "duration"
  end

end

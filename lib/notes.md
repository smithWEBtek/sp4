smithpiano site:

schedule appts online
	react app
	customer database
	schedule database

show technical credibility
	static assets
qualify leads before they call or schedule
	react app wizard(s)
	static and dynamic assets
	react app: qualify based on choices
music bio credibility
	static assets, migrate existing
music activity promotion
	static assets

teaching bio credibility
	static assets
teaching materials, studio policy, downloads
	static assets
	dynamic assets via react music-studio app


====================================================================
DATABASE plan: 

--------------------
asset.rb	
class CreateAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :assets do |t|
			t.string "title"
			t.string "category"
			t.string "description"
			t.string "format"
			t.string "location"
			t.string "url", default: "no_url_given"
    end
  end
end

--------------------
appt.rb
belongs_to: customer
has_many :services

class CreateAppts < ActiveRecord::Migration[5.1]
  def change
    create_table :appts do |t|
			t.integer		"customer_id"
			t.date			"appt_date"
			t.datetime	"appt_start"
			t.datetime	"appt_end"
			t.text			"appt_note"
      t.timestamps
    end
  end
end

--------------------
customer.rb
has_many :appts

class CreateAppts < ActiveRecord::Migration[5.1]
  def change
    create_table :appts do |t|
			t.text			"firstname"
			t.text			"lastname"
			t.text			"address1"
			t.text			"address2"
			t.text			"city"
			t.text			"state"
			t.text			"zip"
			t.text			"email"
			t.text			"phone1"
			t.text			"phone2"
			t.text			"brand"
			t.text			"model"
			t.text			"serial"
			t.text			"finish"
			t.text			"about"
			t.date			"last_service"
			t.date			"last_reminder"
      t.timestamps
    end
  end
end

--------------------
service.rb
has_many :appts

class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
			t.integer		"title"
			t.text			"description"
			t.integer		"cost"
			t.integer		"duration"
    end
  end
end


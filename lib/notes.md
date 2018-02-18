smithpiano site goals and functionality:

schedule appts online
	authentication required	
	react schedule builder components
	customer table
	appts table
	
show technical services credibility
	static assets

qualify services leads before they call or schedule
	react app wizards using static assets

show musician credibility
	static assets, bio, clips, audio, video, image

promote musician activity
	static assets, gig schedule
	advertise for new live music clients

show teaching credibility
	static assets, bio, clips, audio, video, image

support teaching activity
	authentication required	
	static assets 
	studio policy, downloads
	connect react music-studio app

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
			t.integer	  "customer_id"
			t.integer	  "service_id"
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

class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
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
			t.text			"pno_brand"
			t.text			"pno_model"
			t.text			"pno_serial"
			t.text			"pno_type
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

get NewAppt working with cancel and save
test routing on Heroku
add service to appt
clean up data source from SQL Server

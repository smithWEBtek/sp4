class CreateAppts < ActiveRecord::Migration[5.1]
  def change
    create_table :appts do |t|
			t.integer		"customer_id"
			t.integer		"service_id", default: 1
			t.date			"appt_date"
			t.datetime	"appt_start"
			t.datetime	"appt_end"
			t.text			"appt_note"
      t.timestamps
    end
  end
end
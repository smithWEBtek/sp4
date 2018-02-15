class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
			t.text			"firstname"
			t.text			"lastname"
			t.text			"fullname", default: 'asdf'
			t.text			"address"
			t.text			"city"
			t.text			"state"
			t.text			"zip"
			t.text			"email"
			t.text			"phone1"
			t.text			"phone2"
			t.text			"phone3"
			t.text			"pno_brand"
			t.text			"pno_model"
			t.text			"pno_serial"
			t.text			"pno_type"
			t.text			"about"
			t.date			"last_meeting"
			t.date			"last_reminder"
      t.timestamps
    end
  end
end

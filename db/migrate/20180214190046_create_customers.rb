class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
			t.text			"firstname"
			t.text			"lastname"
			t.text			"address"
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

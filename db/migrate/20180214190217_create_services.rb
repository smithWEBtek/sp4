class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
			t.text		"title"
			t.text			"months_since_last_svc", default: 0
			t.integer		"cost"
			t.integer		"duration"
    end
  end
end

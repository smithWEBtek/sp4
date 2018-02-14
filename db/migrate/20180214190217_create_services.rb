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

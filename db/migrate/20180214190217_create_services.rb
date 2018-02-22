class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
			t.text			"title"
			t.integer	 	"months_since_last_svc"
			t.integer		"cost"
			t.integer		"duration"
    end
  end
end

class CreateRecordings < ActiveRecord::Migration[5.1]
  def change
		create_table :recordings do |t|
			t.integer "asset_id"
			t.string	"title"
			t.text		"description"
			t.text		"credits"
			t.text		"year"
			t.text		"location"
 
      t.timestamps
    end
  end
end

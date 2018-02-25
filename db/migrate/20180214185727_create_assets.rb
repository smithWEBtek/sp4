class CreateAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :assets do |t|
			t.string 		"public_id"
			t.integer  	"version"
			t.string   	"format"
			t.integer  	"width", default: 110
			t.integer  	"height", default: 110
			t.string   	"base_url"
			t.string 		"url"

    end
  end
end

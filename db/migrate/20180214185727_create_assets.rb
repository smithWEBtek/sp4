class CreateAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :assets do |t|
			t.string 		"title"
			t.string  	"category"
			t.string   	"description"
			t.string  	"format"
			t.string 		"url"

    end
  end
end

class CreateApptServices < ActiveRecord::Migration[5.1]
  def change
    create_table :appt_services do |t|
			t.integer :appt_id
			t.integer :service_id

      t.timestamps
    end
  end
end

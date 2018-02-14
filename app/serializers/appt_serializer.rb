class ApptSerializer < ActiveModel::Serializer
	attributes :id, :customer_id, :appt_date, :appt_start, :appt_end, appt_note, :created_at, :updated_at
	belongs_to: customer
	has_many :services
end

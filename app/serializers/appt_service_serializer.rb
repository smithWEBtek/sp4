class ApptServiceSerializer < ActiveModel::Serializer
	attributes :id, :appt_id, :service_id
	belongs_to :appt 
	belongs_to :service
end

class ServiceSerializer < ActiveModel::Serializer
	attributes :id, :title, :months_since_last_svc, :cost, :duration
	has_many :appt_services
	has_many :appts, through: :appt_services
end

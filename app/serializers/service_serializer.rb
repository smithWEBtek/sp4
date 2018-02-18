class ServiceSerializer < ActiveModel::Serializer
	attributes :id, :title, :description, :cost, :duration
	has_many :appt_services
	has_many :appts, through: :appt_services
end

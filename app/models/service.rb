class Service < ApplicationRecord
	has_many :appt_services
	has_many :appts, through: :appt_services
end

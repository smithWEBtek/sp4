class Appt < ApplicationRecord
	belongs_to :customer
	has_many :appt_services
	has_many :services, through: :appt_services
end

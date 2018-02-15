class Appt < ApplicationRecord
	belongs_to :customer
	has_many :services
end

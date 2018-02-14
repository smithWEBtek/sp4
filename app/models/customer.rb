class Customer < ApplicationRecord
	has_many :appts
	has_many :services, through: :appts
end

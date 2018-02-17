class Customer < ApplicationRecord
	has_many :appts
	has_many :services, through: :appts

	require 'csv'
	
	def fullname
		"#{self.firstname}" + ' ' + "#{self.lastname}"
	end

	def self.import_data
		csv_text = File.read(Rails.root.join('db', 'data', 'testdata1.csv'))
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
		csv.each_with_object({}) do |row|
			customer = {}
			i = 0
			while i < row.to_hash.keys.count do 
				keys = row.to_hash.keys
				values = row.to_hash.values
				customer[keys[i]] = values[i]	if !keys[i].nil?
				i += 1
			end
			newCustomer = Customer.new(customer)
			newCustomer.fullname = newCustomer.fullname
			newCustomer.zip = '0' + "#{newCustomer.zip}"
			newCustomer.save
		end
	end
end

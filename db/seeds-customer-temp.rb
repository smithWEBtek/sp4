
DATA_customers = {
  :customer_keys =>
	["firstname", "lastname", "address", "city", "state", "zip", "email", "phone1", "phone2", "brand", "model", "serial", "finish", "about", "last_service", "last_reminder"]
  :customers => ][
		["Michael", "Close", "29 Wright Road", "Hollis", "NH", "03049"],
		["Anne", "Emerson", "76 Cambridge Road", "Bedford", "NH", "03110"],
		["Meg", "Hamm", "10 Jefferson Drive", "Merrimack", "NH", "03054"],
		["Linda", "Carmody", "199 Sherburne Hill Road", "Northwood", "NH", "03261"],
		["Nancy", "Glasheen", "4 Michael Way", "West Townsend", "MA", "01474"],
		["Terry", "Gordon", "132 Broad St", "Hollis", "NH", "03049"],
		["Mary", "Gilbert-Hall", "27 Bryanwood Lane", "Groton", "MA", "01450"],
		["Bob", "Flanagan", "405 High Street", "Dunstable", "MA", "01450"],
		["Elizabeth", "Harlow", "19 Colleny Drive", "Bedford", "NH", "03110"],
		["Dan", "Feeney", "108 Bear Hill Road", "Merrimac,", "MA", "01860"],
		["LaVerne", "Clayton", "325 Appleton St.", "North Andover", "MA", "01845]"
		["Laura", "Dolloff", "29 Alsun Drive", "Hollis", "NH", "03049"],
		["Amanda", "Chalmers", "219 Nashua Road", "Groton", "MA", "01450"],
		["Susan", "Harbour", "23 Swift Lane", "Merrimack", "NH", "03054"],
		["Stephen", "Foster", "2 Pebble Beach Drive", "Bedford", "NH", "03110"],
		["Lyubov", "Fedorova", "42 New Boston Rd.", "Bedford", "NH", "03110"],
		["Meredith", "Funston", "601 Thain Road", "Hopkinton", "NH", "03229"],
		["Debbie", "Cohen", "104 New Boston Road", "Bedford", "NH", "03110"],
		["Michael", "Cassettari", "100 Hickory Road", "Hampstead", "NH", "03873"],
		["Mike", "Dumont", "25 Terrell", "Hollis", "NH", "03049"],
		["Patricia", "Cauchon", "3 Miles Road", "Amherst", "NH", "03031"],
		["Colette", "Crews", "76 Sentry Way, Country Crossing", "Merrimack", "NH", "03054"],
		["Don", "Cartmill", "77 Rosewell Rd.", "Bedford", "NH", "03110"],
		["Valerie", "Danielson", "15 Checkerberry Lane", "Bedford", "NH", "03110"]
  ]
}

def make_customers
  DATA_customers[:customers].each do |customer|
    new_customer = Customer.new
    customer.each_with_index do |attribute, i|
      new_customer.send(DATA_customers[:customer_keys][i]+"=", attribute)
    end
    new_customer.save
  end
end

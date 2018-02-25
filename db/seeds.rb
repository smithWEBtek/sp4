
DATA_assets = {
  :asset_keys =>
    ["public_id", "version", "format", "width", "height", "base_url", "url"],
  :assets => [		
		["sp-site/album-simone", "1519490171", "jpg", "600", "600"],
		["sp-site/album-michael-blum-initiation", "1519490170", "jpg", "960", "960"],
		["sp-site/album-chris", "1519490170", "jpg", "215", "215"],
		["sp-site/album-blum-oscar", "1519490170", "jpg", "703", "739"],
		["sp-site/album-blum-init", "1519490170", "jpg", "960", "960"],
		["sp-site/album-reef", "1519490170", "jpg", "161", "160"],
		["sp-site/album-blum-commit", "1519490170", "jpg", "500", "500"],
		["sp-site/album-alphonso", "1519490169", "jpg", "650", "637"],
		["sp-site/album-bees", "1519490169", "jpg", "110", "110"]
  ]
}

def make_assets
  DATA_assets[:assets].each do |asset|
    new_asset = Asset.new
    asset.each_with_index do |attribute, i|
      new_asset.send(DATA_assets[:asset_keys][i]+"=", attribute)
    end
    new_asset.save
  end
end

DATA_services = {
  :service_keys =>
	["title", "months_since_last_svc", "cost", "duration"],
  :services => [
  ['1tuning and service', 18, 175, 120],
  ['2tuning and service', 12, 155, 120],
  ['3tuning and service', 6, 135, 100],
  ['4tuning and service', 4, 125, 90],
  ['half day service (pre-arranged)', 0, 350, 240],
  ['1onsite technical inspection, verbal report', 0, 75, 45],
  ['2onsite technical inspection, written report', 0, 150, 60]
  ]
}

def make_services
  DATA_services[:services].each do |service|
    new_service = Service.new
    service.each_with_index do |attribute, i|
      new_service.send(DATA_services[:service_keys][i]+"=", attribute)
    end
    new_service.save
  end
end

@date = Date.new(2018, 2, 14)
@time = Time.new(2018, 2, 14, 02) 

DATA_appts = {
  :appt_keys =>
	["customer_id", "appt_date", "appt_start", "appt_end", "appt_note"],
  :appts => [
  [1, @date, @time, @time, 'tuning and maintenance'],
  [2, @date, @time, @time, 'tuning and maintenance'],
  [3, @date, @time, @time, 'tuning and maintenance'],
  [4, @date, @time, @time, 'tuning and discuss upgrading piano'],
	[5, @date, @time, @time, 'check for water damage'],
	[6, @date, @time, @time, 'tuning and maintenance'],
	[7, @date, @time, @time, 'prep for recital'],
	[8, @date, @time, @time, 'tuning and maintenance'],
	[9, @date, @time, @time, 'hammers sticking, tune and call to discuss'],
	[10, @date, @time, @time, 'prep for selling piano']
  ]
}

def make_appts
  DATA_appts[:appts].each do |appt|
    new_appt = Appt.new
    appt.each_with_index do |attribute, i|
      new_appt.send(DATA_appts[:appt_keys][i]+"=", attribute)
    end
    new_appt.save
  end
end

DATA_appt_services = {
  :appt_service_keys =>
	["appt_id", "service_id"],
  :appt_services => [
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 1],
  [6, 1],
  [7, 4],
  [8, 1],
	[9, 1],
	[10, 1]
  ]
}

def make_appt_services
  DATA_appt_services[:appt_services].each do |appt_service|
    new_appt_service = ApptService.new
    appt_service.each_with_index do |attribute, i|
      new_appt_service.send(DATA_appt_services[:appt_service_keys][i]+"=", attribute)
    end
    new_appt_service.save
  end
end

def load_customers
	Customer.import_data
end

def main
	make_assets
	make_services
	load_customers
	make_appts
	make_appt_services
end

main
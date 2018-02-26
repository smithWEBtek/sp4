
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

DATA_assets = {
  :asset_keys =>
    ["public_id", "version", "format", "width", "height", "base_url", "url"],
  :assets => [		
		["sp-site/album-alphonso", 1519490169, "jpg", "215", "215",  'https://res.cloudinary.com/smithwebtek/image/upload/v'],
		["sp-site/album-simone", 1519490171, "jpg", "215", "215",  'https://res.cloudinary.com/smithwebtek/image/upload/v'],
		["sp-site/album-chris", 1519490170, "jpg", "215", "215",  'https://res.cloudinary.com/smithwebtek/image/upload/v'],
		["sp-site/album-bees", 1519490169, "jpg", "215", "215",  'https://res.cloudinary.com/smithwebtek/image/upload/v'],
		["sp-site/album-michael-blum-initiation", 1519490170, "jpg", "215", "215",  'https://res.cloudinary.com/smithwebtek/image/upload/v'],
		["sp-site/album-blum-commit", 1519490170, "jpg", "215", "215",  'https://res.cloudinary.com/smithwebtek/image/upload/v'],
		["sp-site/album-blum-oscar", 1519490170, "jpg", "215", "215",  'https://res.cloudinary.com/smithwebtek/image/upload/v'],
		["sp-site/album-wesn", 1519490169, "jpg", "215", "215",  nil, "https://www.youtube.com/watch?v=OSkmEbcF0A0"]
  ]
}

def make_assets
  DATA_assets[:assets].each do |asset|
    new_asset = Asset.new
    asset.each_with_index do |attribute, i|
      new_asset.send(DATA_assets[:asset_keys][i]+"=", attribute)
		end
		new_asset.url = "#{new_asset.base_url}#{new_asset.version}/#{new_asset.public_id}.#{new_asset.format}" if !new_asset.base_url.nil?
    new_asset.save
  end
end

DATA_recordings = {
	:recording_keys =>
	["asset_id", "title", "artist", "year", "location", "credits"],
  :recordings => [		
		[1,
		"At The Edge",
		"Alfonso Villalonga and The Cabaret Rose",
		"1990",
		"Recorded at Blue Jay Studios, Carlisle, MA",
		"Alfonso Villalonga (vocalist, composer, arranger, conductor), Alan Bern (accordion), Bob Nieske (bass), Matt Wilson (drums),Johaness Ammon (violin), Jeff Warschauer (mandolin), Bryndis Baldursson (cello), Cece Giannotti (guitar), Dr No (drums), Roy Okutani (trumpet), Billy Novick (clarinet), Curtis Hasselbrink (trombone), Bevan Manson and Brad Smith (piano)"],
		
		[2,
		"Take My Love",
		"Simone Waddel",
		"1996",
		"Recorded at Blue Jay Studios, Carlisle, MA",
		"Simone Waddel (vocals, composer), Jim Stinnett (bass, arranger), Tony Fesmire and Dennis Montgomery (vocals), Marco Abreu, (guitar), Charles Haynes (drums), Germmain Nelson (piano), Brad Smith (piano and keyboards)"],
		 
		[3, 
		"Chris Plays Ray",
		"Chris Mewhinney Quartet/Quintet/Trio",
		"2013",
		"Recorded at Jon Chase Studio",
		"Chris Mewhinney (bass), Jim Stinnett (bass), Michael Blum (Guitar), Dom Moio (drums), Brad Smith (piano)"],
		
		[4,
		"Live Evil",
		"Bees Deluxe",
		"2013",
		"Recorded live at “The Grog” Newburyport, MA",
		"Conrad Warre, (guitar, vocal), Brad Smith (keys/bass),Patrick Sanders (drums)"],
			
		[5,
		"Initiation",
		"Michael Blum Quartet",
		"2014",
		"Recorded at Jon Chase Studio",
		"Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano). See review of this album in the November 2014 issue of DownBeat Magazine"],
		
		[6, 
		"Commitment",
		"Michael Blum Quartet",
		"Jan 2015",
		"Recorded at Jon Chase Studio",
		"Michael Blum DOWNBEAT MAGAZINE 2015 “RISING STAR(guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano)"],
		
		[7, 
		"Chasin' Oscar", 
		"Michael Blum Quartet", 
		"June 2016", 
		"Recorded at Jon Chase Studio",
		"Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano)"],
		
		[8,
		"Wes'n: A Tribute to Wes Montgomery",
		"Michael Blum Quartet",
		"2017",
		"Recorded at Jon Chase Studio",
		"Michael Blum(guitar), Chip McNeill(sax), Jim Stinnett(bass), Brad Smith(piano), Dave DiCenso(drums)"]
  ]
}

def make_recordings
  DATA_recordings[:recordings].each do |recording|
    new_recording = Recording.new
    recording.each_with_index do |attribute, i|
      new_recording.send(DATA_recordings[:recording_keys][i]+"=", attribute)
		end
    new_recording.save
  end
end

def main
	make_services
	load_customers
	make_appts
	make_appt_services
	make_assets
	make_recordings
end

main
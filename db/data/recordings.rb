DATA_recordings = {
  :recording_keys =>
		["asset_id", "title", "description", "credits", "year", "location", "purchase"],
  :recordings => [		
		[10,
		"Wes'n: A Tribute to Wes Montgomery",
		"Michael Blum Quartet",
		"2017",
		"Recorded at Jon Chase Studio",
		"Michael Blum(guitar), Chip McNeill(sax), Jim Stinnett(bass), Brad Smith(piano), Dave DiCenso(drums)"],
		
		[1,
		"Take My Love",
		"Simone Waddel",
		"1996",
		"Recorded at Blue Jay Studios, Carlisle, MA",
		"Simone Waddel (vocals, composer), Jim Stinnett (bass, arranger), Tony Fesmire and Dennis Montgomery (vocals), Marco Abreu, (guitar), Charles Haynes (drums), Germmain Nelson (piano), Brad Smith (piano and keyboards)"],
		 
		[2,
		"Initiation",
		"Michael Blum Quartet",
		"2014",
		"Recorded at Jon Chase Studio",
		"Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano). See review of this album in the November 2014 issue of DownBeat Magazine"],
		
		[3, 
		"Chris Plays Ray",
		"Chris Mewhinney Quartet/Quintet/Trio",
		"2013",
		"Recorded at Jon Chase Studio",
		"Chris Mewhinney (bass), Jim Stinnett (bass), Michael Blum (Guitar), Dom Moio (drums), Brad Smith (piano)"],
		
		[4, 
		"Chasin' Oscar", 
		"Michael Blum Quartet", 
		"June 2016", 
		"Recorded at Jon Chase Studio",
		"Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano)"],
		
		[7, 
		"Commitment",
		"Michael Blum Quartet",
		"Jan 2015",
		"Recorded at Jon Chase Studio",
		"Michael Blum DOWNBEAT MAGAZINE 2015 “RISING STAR(guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano)"],
		
		
		[9,
		"Live Evil",
		"Bees Deluxe",
		"2013",
		"Recorded live at “The Grog” Newburyport, MA",
		"Conrad Warre, (guitar, vocal), Brad Smith (keys/bass),Patrick Sanders (drums)"],
			
		[8,
		"At The Edge",
		"Alfonso Villalonga and The Cabaret Rose",
		"1990",
		"Recorded at Blue Jay Studios, Carlisle, MA",
		"Alfonso Villalonga (vocalist, composer, arranger, conductor), Alan Bern (accordion), Bob Nieske (bass), Matt Wilson (drums),Johaness Ammon (violin), Jeff Warschauer (mandolin), Bryndis Baldursson (cello), Cece Giannotti (guitar), Dr No (drums), Roy Okutani (trumpet), Billy Novick (clarinet), Curtis Hasselbrink (trombone), Bevan Manson and Brad Smith (piano)"]
			
  ]
}

def make_recordings
  DATA_recordings[:recordings].each do |recording|
    new_recording = Recording.new
    recording.each_with_index do |attribute, i|
      new_recording.send(DATA_recordings[:recording_keys][i]+"=", attribute)
		end
		new_recording.url = "#{new_recording.base_url}#{new_recording.version}/#{new_recording.public_id}.#{new_recording.format}"
    new_recording.save
  end
end



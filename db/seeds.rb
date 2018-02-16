
DATA_assets = {
  :asset_keys =>
    ["title", "category", "description", "format", "location", "url"],
  :assets => [
    ["El Manisero", "Salsa", "salsa chart", "pdf", "cloud", "https://res.cloudinary.com/smithwebtek/image/upload/v1509296858/charts/El_Manisero.pdf"],
    ["Frenesi", "Salsa", "salsa chart", "pdf", "cloud","https://res.cloudinary.com/smithwebtek/image/upload/v1509296858/charts/Frenesi.pdf"],
    ["El Cuarto de Tula", "Salsa", "salsa chart", "pdf", "cloud","https://res.cloudinary.com/smithwebtek/image/upload/v1509296858/charts/El_Cuarto_de_Tula.pdf"],
    ["Capullito De Aleli", "Salsa", "salsa chart", "pdf", "cloud","https://res.cloudinary.com/smithwebtek/image/upload/v1509296858/charts/Capullito_De_Aleli.pdf"],
    ["El Cantante", "Salsa", "salsa chart", "pdf", "cloud","https://res.cloudinary.com/smithwebtek/image/upload/v1509296858/charts/El_Cantante-leadSheet.pdf"],
    ["Guantanamera", "Salsa", "salsa chart", "pdf", "cloud","https://res.cloudinary.com/smithwebtek/image/upload/v1509296858/charts/Guantanamera.pdf"],
    ["Chan Chan", "Salsa", "salsa chart", "pdf", "cloud","https://res.cloudinary.com/smithwebtek/image/upload/v1509296857/charts/Chan_Chan_-_lead_sheet.pdf"],
    ["Chucho", "Salsa", "salsa chart", "pdf", "cloud","https://res.cloudinary.com/smithwebtek/image/upload/v1509296857/charts/Chucho.pdf"],
    ["Castellano Que Bueno Baila Usted", "Salsa", "salsa chart", "pdf", "cloud","https://res.cloudinary.com/smithwebtek/image/upload/v1509296857/charts/Castellano_Que_Bueno_Baila_Usted.pdf"],
    ["A Night In Tunisia", "Salsa", "salsa chart", "pdf","cloud",
    "https://res.cloudinary.com/smithwebtek/image/upload/v1509296857/charts/A_Night_In_Tunisia.pdf"],
    ['cycle of fifths 1', 'harmony', '12 keys in 12 bars', 'doc', 'cloud', 'no_url_given'],
    ['blues in F', 'blues', '12 bar blues', 'doc', 'cloud', 'no_url_given'],
    ['II-V-I 4bar', 'improv', '4 bar phrases', 'aud', 'cloud', 'no_url_given'],
    ['maj triad', 'chords', 'major triad inversions', 'doc', 'cloud', 'no_url_given'],
    ['min triad', 'chords', 'minor triad inversions', 'doc', 'cloud', 'no_url_given'],
    ['major scales', 'scales', 'major scales', 'aud', 'cloud', 'no_url_given'],
    ['approach notes', 'improv', 'approach notes', 'doc', 'cloud', 'no_url_given'],
    ['bi chords', 'improv', 'bi chords', 'doc', 'cloud', 'no_url_given'],
    ['Autumn Leaves', 'tune', 'standard', 'doc', 'cloud', 'no_url_given'],
    ['Blue Bossa', 'tune', 'standard', 'doc', 'cloud', 'no_url_given'],
    ['All The Things', 'tune', 'standard', 'doc', 'cloud', 'no_url_given'],
    ['I Got Rhythm', 'tune', 'standard', 'doc', 'cloud', 'no_url_given'],
    ["Vereno audio", "salsa", "exercise salsa montuno", "aud", "soundcloud", "383625701"],
    ["Misty-salsa", "latin jazz", "latin jazz trio", "aud", "soundcloud", "253001471"],
    ["Ven Morena Montuno", "Salsa", "basic piano montuno", "vid", "youtube", "https://www.youtube.com/embed/JntdJkawVF4?rel=0"],
    ["Montuno Lesson 1", "Salsa", "basic piano montuno", "vid", "youtube", "https://www.youtube.com/embed/CVX7-eZReqs?rel=0"],
    ["Salsa 1", "Salsa", "basic piano montuno", "vid", "youtube", "https://www.youtube.com/embed/-2mu-Hrr838"],
    ['Bill Evans - Universal Mind', 'documentary', 'philosophy of music', 'vid', 'youtube', 'https://www.youtube.com/embed/QwXAqIaUahI?rel=0'],
    ['Gary Burton - Improvisation', 'master class', 'philosophy of improv', 'vid', 'youtube', 'https://www.youtube.com/embed/t2txO_u2eNg?rel=0'],
    ['Kenny Werner - Effortless Mastery', 'master class', 'psychology of playing', 'vid', 'youtube', 'https://www.youtube.com/embed/CBnYgcmSJG8?rel=0'],
    ['Kurt Elling - Role of Band Leader', 'master class', 'leading a gig', 'vid', 'youtube', 'https://www.youtube.com/embed/stbmhcSLXXw?rel=0']
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
	["title", "description", "cost", "duration"],
  :services => [
  ['tuning', 'one tuning at current pitch', '135','1.5'],
  ['tuning-pitch-raise', 'one tuning to raise pitch', '35','0.5'],
  ['cleaning', 'vacuum reachable areas', '20','0.2'],
  ['regulation-vertical', '7 step rough regulation', '150','3.0'],
  ['inspection-verbal', 'inspection - verbal report', '75','.75'],
  ['inspection-written', 'inspection - written report', '150', '2.0']
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

DATA_appts = {
  :appt_keys =>
	["customer_id", "appt_date", "appt_start", "appt_end", "appt_note"],
  :appts => [
  [1, '2018-02-02', '08:00AM', '12:00PM', 'tuning and maintenance'],
  [2, '2018-02-01', '10:00AM', '12:00PM', 'tuning and maintenance'],
  [3, '2018-02-03', '08:00AM', '12:00PM', 'tuning and maintenance'],
  [4, '2018-02-04', '10:00AM', '12:00PM', 'tuning and maintenance'],
  [5, '2018-02-05', '08:00AM', '12:00PM', 'tuning and maintenance'],
  [6, '2018-02-05', '10:00AM', '12:00PM', 'tuning and maintenance'],
  [7, '2018-02-06', '08:00AM', '12:00PM', 'tuning and maintenance'],
  [8, '2018-02-07', '10:00AM', '12:00PM', 'tuning and maintenance'],
	[9, '2018-02-07', '02:00PM', '04:00PM', 'tuning and maintenance'],
	[10, '2018-02-02', '08:00AM', '12:00PM', 'tuning and maintenance'],
	[11, '2018-02-02', '08:00AM', '12:00PM', 'tuning and maintenance'],
  [12, '2018-03-01', '10:00AM', '12:00PM', 'tuning and maintenance'],
  [13, '2018-03-03', '08:00AM', '12:00PM', 'tuning and maintenance'],
  [14, '2018-04-04', '10:00AM', '12:00PM', 'tuning and maintenance'],
  [15, '2018-05-05', '08:00AM', '12:00PM', 'tuning and maintenance'],
  [16, '2018-06-05', '10:00AM', '12:00PM', 'tuning and maintenance'],
  [17, '2018-07-06', '08:00AM', '12:00PM', 'tuning and maintenance'],
  [18, '2018-08-07', '10:00AM', '12:00PM', 'tuning and maintenance'],
  [19, '2018-09-07', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [20, '2018-10-07', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [21, '2018-11-07', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [22, '2018-12-07', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [23, '2018-02-07', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [24, '2018-02-08', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [25, '2018-02-09', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [26, '2018-02-12', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [27, '2018-02-15', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [28, '2018-02-25', '02:00PM', '04:00PM', 'tuning and maintenance'],
  [29, '2018-02-26', '02:00PM', '04:00PM', 'tuning and maintenance'],
	[30, '2018-02-26', '02:00PM', '04:00PM', 'tuning and maintenance']
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

def load_customers
	Customer.import_data
end

def main
	make_assets
	make_services
	load_customers
	make_appts
end

main

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
	["title", "months_since_last_svc", "cost", "duration"],
  :services => [
  ['tuning & service', 18, 175, 120],
  ['tuning & service', 12, 155, 120],
  ['tuning & service', 6, 135, 100],
  ['tuning & service', 4, 125, 90],
  ['4 hour service (pre-arranged)', 0, 350, 240],
  ['onsite technical inspection, verbal report', 0, 75, 45],
  ['onsite technical inspection, written report', 0, 150, 60]
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
  [4, @date, @time, @time, 'tuning and maintenance'],
	[5, @date, @time, @time, 'tuning and maintenance']
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
	[10, 1],
	[11, 3],
  [12, 1],
  [13, 1],
  [14, 1],
  [15, 1],
  [16, 4],
  [17, 1],
  [18, 1],
  [19, 1],
  [20, 1],
  [21, 5],
  [22, 1],
  [23, 1],
  [24, 1],
  [25, 1],
  [26, 2],
  [27, 3],
  [28, 1],
  [29, 4],
	[30, 1]
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
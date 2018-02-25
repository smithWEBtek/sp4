class Asset < ApplicationRecord
 
	def make_url
		url = self.baseUrl + self.version + '/' + self.publicId + self.format
	end
end

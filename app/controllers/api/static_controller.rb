class Api::StaticController < ApplicationController

	def index
		render html: 'This is SmithPiano API v4'
	end
end

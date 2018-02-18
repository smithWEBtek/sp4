class Api::ServicesController < ApplicationController
	before_action :set_service, only: [:show, :update, :destroy]
	def index
		@services = Service.all
		render json: @services
	end
	
	def show
		render json: @service
	end

	def create
		@service = Service.new(service_params)
		if @service.save
			render json: @service
		else
			render json: { errors: { message: 'service NOT updated' }}
		end
	end

	def update
		@service.update(service_params)
		if @service.save
			redirect_to service_path(@service)
		else
			render json: { errors: { message: 'service NOT updated' }}
		end
	end

	def destroy
		@service.update(service_note: 'inactive')
		render json: { message: 'service remains in Database, with status set to inactive' }
	end
	
		private
		def set_service
			@service = Service.find_by_id(params[:id])
		end

		def service_params
			params.require(:service).permit(:title, :category, :format, :location, :url)
		end
end

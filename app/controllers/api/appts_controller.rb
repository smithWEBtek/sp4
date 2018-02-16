class Api::ApptsController < ApplicationController
 	before_action :set_appt, only: [:show, :update, :destroy]
	def index
		@appts = Appt.all
		render json: @appts
	end
	
	def show
		render json: @appt
	end

	def create
		@appt = Appt.new(appt_params)
		if @appt.save
			flash[:notice] = "Appt created."
			render json: @appt
		else
			render json: { errors: { message: 'appt NOT updated' }}
		end
	end

	def update
		@appt.update(appt_params)
		if @appt.save
			flash[:notice] = "Appt updated."
			redirect_to appt_path(@appt)
		else
			render json: { errors: { message: 'appt NOT updated' }}
		end
	end

	def destroy
		@appt.update(appt_note: 'inactive')
		render json: { message: 'appt remains in Database, with status set to inactive' }
	end
	
		private
		def set_appt
			@appt = Appt.find_by_id(params[:id])
		end

		def appt_params
			params.require(:appt).permit(:customer_id, :appt_date, :appt_start, :appt_end, :appt_note)
		end
end

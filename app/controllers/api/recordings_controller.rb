class Api::RecordingsController < ApplicationController
	before_action :set_recording, only: [:show, :update, :destroy]
	def index
		@recordings = Recording.all
		render json: @recordings
	end
	
	def show
		render json: @recording
	end

	def create
		recording = Recording.new(recording_params)
		if recording.save
			render json: recording
		else
			render json: { errors: { message: 'recording NOT updated' }}
		end
	end

	def update
		@recording.update(recording_params)
		if @recording.save
			redirect_to recording_path(@recording)
		else
			render json: { errors: { message: 'recording NOT updated' }}
		end
	end

	def destroy
		@recording.update(recording_note: 'inactive')
		render json: { message: 'recording remains in Database, with status set to inactive' }
	end
	
		private
		def set_recording
			@recording = Recording.find_by_id(params[:id])
		end

		def recording_params
			params.require(:recording).permit(:title, :description, :credits, :year)
		end
end

class Api::AssetsController < ApplicationController
	before_action :set_asset, only: [:show, :update, :destroy]
	def index
		@assets = Asset.all
		render json: @assets
	end
	
	def show
		render json: @asset
	end

	def create
		asset = Asset.new(asset_params)
		if asset.save
			render json: asset
		else
			render json: { errors: { message: 'asset NOT updated' }}
		end
	end

	def update
		@asset.update(asset_params)
		if @asset.save
			redirect_to asset_path(@asset)
		else
			render json: { errors: { message: 'asset NOT updated' }}
		end
	end

	def destroy
		@asset.update(asset_note: 'inactive')
		render json: { message: 'asset remains in Database, with status set to inactive' }
	end
	
		private
		def set_asset
			@asset = Asset.find_by_id(params[:id])
		end

		def asset_params
			params.require(:asset).permit(:title, :category, :description, :format, :url)
		end
end

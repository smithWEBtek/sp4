class RecordingSerializer < ActiveModel::Serializer
	attributes :id, :asset_id, :title, :description, :credits, :year, :location
	belongs_to :asset
end

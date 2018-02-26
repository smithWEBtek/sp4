class RecordingSerializer < ActiveModel::Serializer
	attributes :id, :asset_id, :title, :artist, :year, :location, :credits
	belongs_to :asset
end

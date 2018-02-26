class AssetSerializer < ActiveModel::Serializer
	attributes :id, :title, :category, :description, :format, :url
end

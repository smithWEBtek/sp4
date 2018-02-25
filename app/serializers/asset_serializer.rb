class AssetSerializer < ActiveModel::Serializer
	attributes :id, :public_id, :version, :format, :width, :height, :base_url, :url
end

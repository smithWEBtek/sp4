class AssetSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :format, :location, :url
end

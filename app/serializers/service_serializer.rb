class ServiceSerializer < ActiveModel::Serializer
	attributes :id, :title, :description, :cost, :duration
end

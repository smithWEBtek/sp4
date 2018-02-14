class CustomerSerializer < ActiveModel::Serializer
	attributes :id, :firstname, :lastname, :address1, :address2, :city, :state, :zip, :email, :phone1, :phone2, :brand, :model, :serial, :finish, :about, :last_service, :last_reminder, :created_at, :updated_at
	has_many :appts
	has_many :services, through: :appts
end

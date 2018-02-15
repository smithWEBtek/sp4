class CustomerSerializer < ActiveModel::Serializer
	attributes :id, :firstname, :lastname, :address, :city, :state, :zip, :email, :phone1, :phone2, :phone3, :pno_brand, :pno_model, :pno_serial, :pno_type, :about, :last_meeting, :last_reminder, :created_at, :updated_at
	has_many :appts
end

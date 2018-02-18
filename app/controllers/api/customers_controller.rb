class Api::CustomersController < ApplicationController
	before_action :set_customer, only: [:show, :update, :destroy]

	def index
		@customers = Customer.all
		render json: @customers
	end
	
	def show
		render json: @customer
	end

	def create
		@customer = Customer.new(customer_params)
		@customer.fullname = @customer.fullname
		if @customer.save
			render json: @customer
		else
			render json: { errors: { message: 'customer NOT updated' }}
		end
	end

	def update
		@customer.update(customer_params)
		if @customer.save
			redirect_to customer_path(@customer)
		else
			render json: { errors: { message: 'customer NOT updated' }}
		end
	end

	def destroy
    @customer.update(about: 'inactive')
    render json: { message: 'customer remains in Database, with status set to inactive' }
  end
	
		private
		def set_customer
			@customer = Customer.find_by_id(params[:id])
		end

		def customer_params
			params.require(:customer).permit(
				:firstname, :lastname, :address, :city, :state, 
				:zip, :email, :phone1, :phone2, :phone3, :about, :pno_brand, 
				:pno_model, :pno_serial, :pno_type, :about, :last_service, :last_reminder)
		end
end


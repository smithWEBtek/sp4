class Api::CustomersController < ApplicationController
	before_action :set_customer, only: [:show, :edit, :update, :destroy]

	def index
		@customers = Customer.all
		respond_to do |format|
			format.html { render :index }
			format.json { render json: @customers }
		end
	end
	
	def show
			respond_to do |format|
			format.html { render :show }
			format.json { render json: @customer }
		end
	end

	def new
		@customer = Customer.new
	end

	def create
		@customer = Customer.new(customer_params)
		if @customer.save
			flash[:notice] = "Customer created."
			redirect_to customer_path(@customer)
		else
			render :new
		end
	end

	def edit
	end

	def update
		@customer.update(customer_params)
		if @customer.save
			flash[:notice] = "Customer updated."
			redirect_to customer_path(@customer)
		else
			render :new
		end
	end

	def destroy
		if @customer.delete
			flash[:notice] = "Customer deleted"
			redirect_to customers_path
		else
			flash[:notice] = @customer.errors.full_messages
			redirect_to customer_path(@customer)
		end
	end
	
		private
		def set_customer
			@customer = Customer.find_by_id(params[:id])
		end

		def customer_params

binding.pry

			params.require(:customer).permit(
				:firstname, :lastname, :address, :city, :state, 
				:zip, :email, :phone1, :phone2, :phone3, :pno_brand, 
				:pno_model, :pno_serial, :pno_type, :about, :last_service, :last_reminder)
		end
end

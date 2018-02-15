Rails.application.routes.draw do
	root 'api/static#index'  
 

	get '/api/customers/new', to: 'api/customers#new'

	namespace :api do
  	resources :services
  	resources :customers
  	resources :appts
  	resources :assets
	end
end

Rails.application.routes.draw do

	root 'api/static#index'
	
	namespace :api do
  	resources :services
		resources :appt_services
  	resources :customers
  	resources :appts
		resources :assets
		resources :recordings
	end
end

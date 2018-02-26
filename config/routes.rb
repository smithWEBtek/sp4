Rails.application.routes.draw do
  resources :recordings
  resources :appt_services
	root 'api/static#index'

	namespace :api do
  	resources :services
  	resources :customers
  	resources :appts
  	resources :assets
	end
end

Rails.application.routes.draw do
	root 'api/static#index'

	namespace :api do
  	resources :services
  	resources :customers
  	resources :appts
  	resources :assets
	end
end

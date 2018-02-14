Rails.application.routes.draw do
  resources :services
  resources :customers
  resources :appts
  resources :assets
	root 'api/static#index'  
end

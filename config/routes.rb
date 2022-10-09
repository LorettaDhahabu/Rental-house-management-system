Rails.application.routes.draw do
  resources :houses
  resources :apartments
  resources :tenants
  resources :landlords
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

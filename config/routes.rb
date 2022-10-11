Rails.application.routes.draw do

  resources :payments,  only: [:index, :show, :create, :update, :destroy]

  resources :rooms, only: [:index, :show, :create, :update, :destroy]

  resources :users,  only: [:index, :show, :create, :update, :destroy]
  
  resources :landlords,  only: [:index, :show, :create, :update, :destroy]

  resources :apartments, only: [:index, :show, :create, :update, :destroy]

  resources :tenants, only: [:index, :show, :create, :update, :destroy]

  # resources :houses, only: [:index, :show, :create, :update, :destroy]

  

 

  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

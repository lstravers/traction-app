Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: "home#index"
  get "home", to: "home#home"
  resources :inventories
  resources :users
  resources :reversals
  resource :session, only: [:new, :create, :destroy]

  root to: "home#index"

end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
<<<<<<< HEAD
  resources :inventories
resources :users

resources :reversals

=======
>>>>>>> 8ca32cfa08a5c3b6f1f26acb0ea3ead604f40cbd

  get "/", to: "home#index"
  get "home", to: "home#home"
  resources :inventories
  resources :users
  resources :reversals
  resource :session, only: [:new, :create, :destroy]

end

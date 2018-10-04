Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
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

 root to: "home#index"

  # You can also override after_sign_in_path_for and
  # after_sign_out_path_for to customize your redirect hooks.
end

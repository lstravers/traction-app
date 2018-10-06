Rails.application.routes.draw do
  # devise_for :users, controllers: {
  #   sessions: 'users/sessions'
  # }
  devise_for :users, skip: [:sessions]
  as :user do
    get 'signin', to: 'devise/sessions#new', as: :new_user_session
    post 'signin', to: 'devise/sessions#create', as: :user_session
    delete 'signout', to: 'devise/sessions#destroy', as: :destroy_user_session
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: "home#index"
  get "home", to: "home#home"
  resources :inventories
  resources :users
  resources :reversals
  # resource :session, only: [:new, :create, :destroy]
  resources :clients
  root to: "home#index"

  # You can also override after_sign_in_path_for and
  # after_sign_out_path_for to customize your redirect hooks.
end

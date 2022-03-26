Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:show, :create, :update, :destroy, :index] 
    resources :channels, only: [:create, :destroy, :update, :show]
    resources :server_memberships, only: [:create, :destroy]
    resources :messages, only: [:create, :destroy, :update]
  end
end

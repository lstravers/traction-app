class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :auth_token
      t.string :password_digest
      t.string :email
      t.integer :phone
      t.string :county
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.string :zip
      t.boolean :admin
      t.string :contact_type
      t.date :date_auth
      t.date :admin_auth

      t.timestamps
    end
    add_index :users, :auth_token, unique: true
  end
end

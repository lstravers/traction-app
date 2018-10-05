class CreateInventories < ActiveRecord::Migration[5.2]
  def change
    create_table :inventories do |t|
      t.string :serial_num
      t.string :kit_type
      t.references :user, foreign_key: true
      t.references :client, foreign_key: true
      t.date :expiration_date
      t.date :distributed_date

      t.timestamps
    end
    add_index :inventories, :serial_num, unique: true
  end
end

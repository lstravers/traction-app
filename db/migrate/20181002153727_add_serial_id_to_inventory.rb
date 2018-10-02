class AddSerialIdToInventory < ActiveRecord::Migration[5.2]
  def change
    add_column :inventories, :serial_id, :string
  end
end

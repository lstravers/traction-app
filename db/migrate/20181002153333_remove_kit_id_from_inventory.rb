class RemoveKitIdFromInventory < ActiveRecord::Migration[5.2]
  def change
    remove_column :inventories, :kit_id, :integer
  end
end

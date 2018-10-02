class CreateReversals < ActiveRecord::Migration[5.2]
  def change
    create_table :reversals do |t|
      t.string, :city
      t.string, :town
      t.integer, :doses
      t.string, :kit_type
      t.integer :time_between

      t.timestamps
    end
  end
end

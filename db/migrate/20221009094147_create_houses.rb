class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.integer :house_no
      t.integer :tenant_id
      t.integer :apartment_id

      t.timestamps
    end
  end
end

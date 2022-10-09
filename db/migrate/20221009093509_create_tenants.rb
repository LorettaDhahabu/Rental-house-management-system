class CreateTenants < ActiveRecord::Migration[6.1]
  def change
    create_table :tenants do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.integer :contact
      t.integer :landlord_id
      t.integer :apartment_id
      t.integer :house_id

      t.timestamps
    end
  end
end

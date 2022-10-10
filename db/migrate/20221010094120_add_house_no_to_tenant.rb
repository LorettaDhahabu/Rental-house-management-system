class AddHouseNoToTenant < ActiveRecord::Migration[6.1]
  def change
    add_column :tenants, :house_no, :integer
  end
end

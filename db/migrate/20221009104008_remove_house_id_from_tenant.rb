class RemoveHouseIdFromTenant < ActiveRecord::Migration[6.1]
  def change
    remove_column :tenants, :house_id, :integer
  end
end

class AddDisplayNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :dname, :string
    add_index :users, :dname, unique: true
  end
end

class ReplaceUsernameWithNames < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :age, :string, null: false
  end
end

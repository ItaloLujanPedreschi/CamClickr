class RemoveTextFromPhoto < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :text
  end
end

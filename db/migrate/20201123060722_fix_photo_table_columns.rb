class FixPhotoTableColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :photos, :description, :title
    add_column :photos, :description, :text
  end
end

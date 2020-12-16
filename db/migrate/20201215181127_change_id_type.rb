class ChangeIdType < ActiveRecord::Migration[5.2]
  def change
    remove_column :photo_album_links, :photo_id
    add_column :photo_album_links, :photo_id, :integer
  end
end

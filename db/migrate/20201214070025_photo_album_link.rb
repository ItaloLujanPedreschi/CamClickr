class PhotoAlbumLink < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_album_links do |t|
      t.string :photo_id, null: false
      t.integer :album_id, null: false

      t.timestamps
    end
    add_index :photo_album_links, [:album_id, :photo_id], unique: true
  end
end

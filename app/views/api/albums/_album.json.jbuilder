json.extract! album, :id, :user_id, :name, :description, :photo_ids
json.photos album.photos, partial: '/api/photos/photo', as: :photo
json.extract! @photo, :id, :user_id, :image, :title, :description
json.photoUrl url_for(@photo.image)
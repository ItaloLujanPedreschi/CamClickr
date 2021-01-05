json.extract! photo, :id, :user_id, :title, :description, :albums
if photo.image.attached?
    json.photoUrl url_for(photo.image)
end
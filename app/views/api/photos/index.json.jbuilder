json.array! @photos do |photo|
    json.extract! photo, :id, :user_id, :title, :description
    json.photoUrl url_for(photo.photo)
end
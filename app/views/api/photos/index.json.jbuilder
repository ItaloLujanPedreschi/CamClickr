json.array! @photos do |photo|
    json.extract! photo, :id, :user_id, :description
    json.photoUrl url_for(photo.photo)
end
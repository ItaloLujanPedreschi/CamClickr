json.array! @photos do |photo|
    json.extract! photo, :id, :user_id, :title, :description
    if photo.image.attached?
        json.photoUrl url_for(photo.image)
    end
end
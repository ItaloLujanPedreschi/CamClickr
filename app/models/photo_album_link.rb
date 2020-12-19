# == Schema Information
#
# Table name: photo_album_links
#
#  id         :bigint           not null, primary key
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  photo_id   :integer
#
class PhotoAlbumLink < ApplicationRecord
    validates :photo_id, :album_id, presence: true

    belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo

    belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album
end

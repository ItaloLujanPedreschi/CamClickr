# == Schema Information
#
# Table name: photo_album_links
#
#  id         :bigint           not null, primary key
#  photo_id   :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PhotoAlbumLink < ApplicationRecord
    validates :photo_id, presence: true
    validates :album_id, presence: true

    belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo

    belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album
end

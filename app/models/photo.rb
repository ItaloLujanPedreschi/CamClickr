# == Schema Information
#
# Table name: photos
#
#  id          :bigint           not null, primary key
#  user_id     :string           not null
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#
class Photo < ApplicationRecord
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :photo_album_links,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :PhotoAlbumLink

    has_many :comments,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Comment,
    dependent: :destroy

    has_one_attached :image
end

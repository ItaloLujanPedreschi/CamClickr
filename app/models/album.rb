# == Schema Information
#
# Table name: albums
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  user_id     :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Album < ApplicationRecord
    validates :name, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :photo_album_links,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :PhotoAlbumLink

    has_many :photos,
    through: :photo_album_links,
    source: :photo
end

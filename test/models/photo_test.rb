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
require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

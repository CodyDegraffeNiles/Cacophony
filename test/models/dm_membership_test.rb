# == Schema Information
#
# Table name: dm_memberships
#
#  id           :bigint           not null, primary key
#  member_id    :integer          not null
#  dm_server_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class DmMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

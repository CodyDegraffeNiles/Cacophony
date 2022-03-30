# == Schema Information
#
# Table name: dm_servers
#
#  id         :bigint           not null, primary key
#  owner_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DmServer < ApplicationRecord

  has_many :messages,
    foreign_key: :channel_id, 
    class_name: :Message,
    dependent: :destroy

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User,
    optional: :true

  has_many :dm_memberships, 
    foreign_key: :dm_server_id, 
    class_name: :DmServer

  has_many :members,
    through: :dm_memberships, 
    source: :member
end

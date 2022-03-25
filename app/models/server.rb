# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  owner_id   :integer          not null
#  name       :string           not null
#  public     :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord

  ## Validations
  validates :name, presence: true, uniqueness: { scope: :owner_id}
  validates :public, inclusion: {in:[true, false]}


  ## Assocations
  belongs_to :owner, 
    foreign_key: :owner_id, 
    class_name: :User

  has_many :server_memberships,
    foreign_key: :server_id, 
    class_name: :ServerMembership,
    dependent: :destroy

  has_many :members,
    through: :server_memberships, 
    source: :member

  has_many :channels, 
    foreign_key: :server_id,
    class_name: :Channel
    dependent: :destroy

  has_many :messages,
    through: :channels, 
    source: :messages

end

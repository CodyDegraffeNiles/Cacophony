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


  ## Asociations
  belongs_to :owner, 
    foreign_key: :owner_id, 
    class_name: :User

  has_many :server_memberships,
    foreign_key: :sever_id, 
    class_name: :User

  has_many :members,
    through: :server_memberships, 
    source: :member
end

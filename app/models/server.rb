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
  validates :name, presence: true, uniqueness: { scope: :owner_id}
  validates :public, inclusion: {in:[true, false]}

  belongs_to :owner, 
    foreign_key: :owner_id, 
    class_name: :User
end

# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
  ## Validations
  validates :server_id, :name, presence: true
  validates :name, length: {minimum: 1}

  ## Assocations
  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
end

# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  number_tag      :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  ## Validations

  validates :email, :session_token, presence: true, uniqueness: true
  validates :username, :number_tag, :password_digest, presence: true
  validates :password, length: {minimum:6, allow_nil: true}
  validates :username, uniqueness: { scope: :number_tag }
  after_initialize :ensure_session_token
  after_initialize :ensure_number_tag

  attr_reader :password

  ## Associations

  ## Belongs to/Has Many
  has_many :ownedServers,
    foreign_key: :owner_id,
    class_name: :Server,
    dependent: :destroy

  has_many :server_memberships,
    foreign_key: :member_id, 
    class_name: :ServerMembership,
    dependent: :destroy

  has_many :messages,
    foreign_key: :author_id,
    class_name: :Message,
    dependent: :destroy

  ## Has many through
  has_many :servers,
    through: :server_memberships, 
    source: :server

  has_many :channels, 
    through: :servers, 
    source: :channels

  has_many :owned_channels, 
    through: :ownedServers,
    source: :channels

  #SPIRE

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil? 
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save! 
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def ensure_number_tag
    self.number_tag ||= rand(1000..10000).to_s
  end

end

class Apartment < ApplicationRecord
  belongs_to :user

  validates :unit, presence: true
  validates :street, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :square_footage, presence: true, numericality: { greater_than: 0 }
  validates :price, presence: true
  validates :bedrooms, presence: true, numericality: { greater_than: 0 }
  validates :bathrooms, presence: true, numericality: { greater_than: 0 }
  validates :pets, presence: true, inclusion: { in: %w[yes no], message: 'must be either "yes" or "no"' }
  validates :image, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp, message: 'must be a valid URL' }
end
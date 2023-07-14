require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) { User.create(
    email: 'test@example.com',
    password: 'password',
    password_confirmation: 'password'
    )
  }

  describe "GET /index" do
    it 'gets a list of apartments' do
      apartment = user.apartments.create(
        street: '123 Road',
        unit: '4C',
        city: 'Alexandria',
        state: 'DC',
        square_footage: 1200,
        price: '$5000',
        bedrooms: 1,
        bathrooms: 1.5,
        pets: 'no',
        image: 'not@apartment.com'
      )
    
      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.first['street']).to eq('123 Road')
    end
  end

  # test for creating a new apartment will live here
end

user1 = User.where(email: "test1@example.com").first_or_create(password: "password", password_confirmation: "password")
user2 = User.where(email: "test2@example.com").first_or_create(password: "password", password_confirmation: "password")

dc_apartments = [
  {
    street: '123 Road',
    unit: '4C', 
    city: 'Alexandria', 
    state: 'DC',
    square_footage: 1200,
    price: '$5,000',
    bedrooms:1,
    bathrooms:1.5, 
    pets:'no',
    image: 'not@apartment.com'
  },{
    street: '69 DMV Road',
    unit: '4D', 
    city: 'Columbia', 
    state: 'DC',
    square_footage: 900,
    price: '$5,000',
    bedrooms:1,
    bathrooms:0, 
    pets:'yes',
    image: 'not@apartment.com'
  }
]

ny_apartments = [
  {
    street: '456 Ave',
    unit: '2C', 
    city: 'Fort Drum', 
    state: 'NY',
    square_footage: 1200,
    price: '$1,500',
    bedrooms:2,
    bathrooms:2, 
    pets:'yes',
    image: 'not@apartment.com'
  }
]

dc_apartments.each do |apartment|
  user1.apartments.create(apartment)
  p "creating: #{apartment}"
end

ny_apartments.each do |apartment|
  user2.apartments.create(apartment)
  p "creating: #{apartment}"
end
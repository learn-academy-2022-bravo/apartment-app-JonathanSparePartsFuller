apartments = [
    {
        street: '5000 Block Ave',
        city: 'Chandler',
        state: 'California',
        manager: 'Brock G.',
        email: 'bro.g@crater.apartment.com',
        price: '$2250',
        bedrooms: 3,
        bathrooms: 2.5,
        pets: 'Allowed',
        image: 'https://images.unsplash.com/photo-1612637968894-660373e23b03?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
  
      },
      {
        street: '1775 Midway Ave',
        city: 'San Diego',
        state: 'California',
        manager: 'Jason Morris',
        email: 'jmorris@midway.apt.com',
        price: '$2500',
        bedrooms: 2,
        bathrooms: 2.5,
        pets: 'Not Allowed',
        image: 'https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
      },
      {
          street: '2000 Throwback Way',
          city: 'Tracy',
          state: 'California',
          manager: 'Steve M.',
          email: 'steve.mag@chaos.apt.com',
          price: '$1200',
          bedrooms: 2,
          bathrooms: 1.5,
          pets: 'Allowed',
          image: 'https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627'
      }
]

apartments.each do |each_apartment|
    Apartment.create each_apartment
    puts "creating apartment #{each_apartment}"
end

user = [
    
    {
        email: 'joesmith@test.com'
        encrypted_password: 'secret-Password'
        reset_password_token: 'please_work'
    }

    {
        email: 'janedoe@test.com'
        encrypted_password: 'super-secret-Password'
        reset_password_token: 'pretty-please_work'
    }

    {
        email: 'joshdone@test.com'
        encrypted_password: 'ultra-secret-Password'
        reset_password_token: 'please_work_please'
    }
]

users.each do |each_user|
    User.create each_user
    puts "creating user #{each_user}"
  end
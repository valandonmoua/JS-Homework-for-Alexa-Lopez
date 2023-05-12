//The List of Tea Guests
let guests = [
    
    { 
        firstName: 'Alice',
        lastName: 'Liddell',
        species: 'Human'
    },

    { 
        firstName: 'White', 
        lastName: 'Rabbit', 
        species: 'Rabbit' 
    },

    {   firstName: 'Mad',
        lastName: 'Hatter',
        species: 'Human' 
    },

    { 
        firstName: 'Queen',
        lastName: 'of Hearts',
        species: 'Human' 
    },

    {   firstName: 'Cheshire',
        lastName: 'Cat',
        species: 'Cat' 
    },

    {   firstName: 'March',
        lastName: 'Hare',
        species: 'Rabbit' 
    },

    {   firstName: 'Dormouse',
        lastName: 'Mouse',
        species: 'Mouse' 
    },

    {   firstName: 'Caterpillar',
        lastName: 'Bug',
        species: 'Insect' 
    },

    {   firstName: 'Frog',
        lastName: 'Footman',
        species: 'Frog' 
    },

    {   firstName: 'King',
        lastName: 'of Hearts',
        species: 'Human' 
    }
];
  
  let teaPartyTable = {};
  
  for (let i = 0; i < guests.length; i++) {
    let guest = guests[i];
  
    smallDessertOptions = ['Chocolate Pudding', 'Vanilla Ice Cream', 'Strawberry Short Cake', 'Lemon Cake', 'Red Velvet Cake', 'Peach Cobbler', 'Macadamia Nut Cookie', 'Blueberry Muffin', 'Tubby Custard'];
    smallDessert = smallDessertOptions[Math.floor(smallDessertOptions.length * Math.random())];
  
    teaGuest = {};
    teaGuest.firstName = guest.firstName;
    teaGuest.lastName = guest.lastName;
    teaGuest.species = guest.species;
    teaGuest.teaCup = true
    teaGuest.teaPlate = true;
    teaGuest.smallDessert = `${smallDessert}`;
  
    teaPartyTable[guest.firstName] = teaGuest;
  }

  for (let guest in teaPartyTable) {
    console.log(`First Name: ${teaPartyTable[guest].firstName}`);
    console.log(`Last Name: ${teaPartyTable[guest].lastName}`);
    console.log(`Species: ${teaPartyTable[guest].species}`);
    console.log(`Tea Cup: ${teaPartyTable[guest].teaCup}`);
    console.log(`Tea Plate: ${teaPartyTable[guest].teaPlate}`);
    console.log(`Small Dessert: ${teaPartyTable[guest].smallDessert}`);
    console.log();
  }
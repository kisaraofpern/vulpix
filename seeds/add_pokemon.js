
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pokemons').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemons').insert([
        {
          id: 1,
          name: 'bulbasaur',
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png'
        },
        {
          id: 2,
          name: 'ivysaur',
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png'
        },
        {
          id: 3,
          name: 'venusaur',
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png'
        },
        {
          id: 4,
          name: 'squirtle',
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png'
        },
        {
          id: 5,
          name: 'wartortle',
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png'
        },
        {
          id: 6,
          name: 'blastoise',
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png'
        },
        {
          id: 7,
          name: 'charmander',
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png'
        },
        {
          id: 8,
          name: 'charmelon',
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png'
        },
        {
          id: 9,
          name: 'charizard',
          imageUrl: 'https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png'
        },
      ]);
    });
};

const knex = require('knex')(require('./knexfile'));

module.exports = {
  getPokemon,
  notChoose,
  choose
}

function getPokemon(id) {
  return knex('pokemons').where({ id: id}).first().then((p) => p);
}

function notChoose(data) {
  return knex('pokemons')
    .where({id: data.id}).first()
    .increment('notChooses', 1)
}

function choose(data) {
  return knex('pokemons')
    .where({id: data.id}).first()
    .increment('chooses', 1)
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemons', (t) => {
    t.increments('id').primary();
    t.string('name').notNullable().unique();
    t.string('imageUrl').notNullable();
    t.integer('chooses').defaultTo(0).comment('This is the number of times someone has clicked "I choose you!"');
    t.integer('notChooses').defaultTo(0).comment('This is the number of times someone has clicked "I don\t choose you!"');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pokemons');
};

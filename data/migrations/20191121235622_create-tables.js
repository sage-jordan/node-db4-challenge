
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128).notNullable();
  })
  .createTable('recipe-ingredients', tbl => {
      tbl.increments();
      tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
      tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients');
      tbl.integer('quantity_of_ingredient').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe-ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};

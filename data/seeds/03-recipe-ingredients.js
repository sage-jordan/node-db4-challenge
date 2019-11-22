
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity_of_ingredient: 8 },
        { recipe_id: 1, ingredient_id: 2, quantity_of_ingredient: 2 },
        { recipe_id: 1, ingredient_id: 3, quantity_of_ingredient: 1 },
        { recipe_id: 1, ingredient_id: 4, quantity_of_ingredient: 1 },
        { recipe_id: 1, ingredient_id: 5, quantity_of_ingredient: 1 },
        { recipe_id: 1, ingredient_id: 6, quantity_of_ingredient: 1 },
        { recipe_id: 1, ingredient_id: 7, quantity_of_ingredient: 2 },
        { recipe_id: 2, ingredient_id: 5, quantity_of_ingredient: 1 },
        { recipe_id: 2, ingredient_id: 5, quantity_of_ingredient: 1 },
        { recipe_id: 2, ingredient_id: 8, quantity_of_ingredient: 2 },
        { recipe_id: 2, ingredient_id: 4, quantity_of_ingredient: 3 }
      ]);
    });
};

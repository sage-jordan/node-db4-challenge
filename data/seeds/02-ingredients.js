
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'one oz elbow macaroni' },
        { ingredient_name: 'one tbs butter' },
        { ingredient_name: 'one tbs all-purpose' },
        { ingredient_name: '1/2 tsp sea salt' },
        { ingredient_name: 'one cup whole milk' },
        { ingredient_name: '1/4 cup sour cream' },
        { ingredient_name: 'one cup shredded cheddar cheese' },
        { ingredient_name: 'one lb potatoes' },
      ]);
    });
};

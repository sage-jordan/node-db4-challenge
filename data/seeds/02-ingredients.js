
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: 'one oz elbow macaroni' },
        { name: 'one tbs butter' },
        { name: 'one tbs all-purpose' },
        { name: '1/2 tsp sea salt' },
        { name: 'one cup whole milk' },
        { name: '1/4 cup sour cream' },
        { name: 'one cup shredded cheddar cheese' },
        { name: 'one lb potatoes' },
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Create new app", description: "I need to make a sweet app"},
        {name: "Rebalance investment portfolio"},
        {name: "Rebuild old PC"},
        {name: "Build brand new PC"}
      ]);
    });
};

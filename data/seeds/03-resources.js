
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Screwdriver set", description: "Need screwdrivers to install PC parts"},
        {name: "VS Code", description: "Need an IDE to code"},
        {name: "ThinkOrSwim", description: "Need a stock analysis tool"}
      ]);
    });
};

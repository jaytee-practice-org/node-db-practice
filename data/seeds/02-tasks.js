
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "Install GPU", notes: "Use old GTX 750 TI"},
        {description: "Install power supply", notes: "Use old thermaltake PSU"},
        {description: "Create app UI mockup"}
      ]);
    });
};

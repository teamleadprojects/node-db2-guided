exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("veggies")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("veggies").insert(generateData());
    });
};
function generateData() {
  return [
    {
      name: "broccoli",
      color: "green",
      tasty: false,
    },
    {
      name: "green papers",
      color: "green",
      tasty: true,
    },
    {
      name: "hot peppers",
      color: "red",
      tasty: true,
    },
  ];
}

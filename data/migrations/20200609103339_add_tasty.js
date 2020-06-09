//Adds a new column after creating veggies table
exports.up = function (knex) {
  return knex.schema.table("veggies", (tbl) => {
    tbl.boolean("tasty");
  });
};

exports.down = function (knex) {
  return knex.schema.table("veggies", (tbl) => {
    tbl.dropColumn("tasty");
  });
};

//describe the changes to the database schema
exports.up = function (knex) {
  return knex.schema.createTable("veggies", (tbl) => {
    //a primary key,  called id, integer, autoincrements
    tbl.increments();
    tbl.string("name", 255).notNullable().unique();
    tbl.string("color", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("veggies");
};

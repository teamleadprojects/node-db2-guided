const knex = require("knex");
const knexfile = require("../knexfile.js");

//this was changed because config is in knexfile:
// const connectionConfig = {
//   client: "sqlite3",
//   connection: {
//     filename: "./data/produce.db3",
//   },
//   useNullAsDefault: true,
// };
//module.exports = knex(connectionConfig);
const config = knexfile.development;
console.log("config", config);
module.exports = knex(config);

import Sequelize from "sequelize";
import mySQLconfig from "../config/config.json" assert { type: "json" };

const env = process.env.NODE_ENV || "development";
const config = mySQLconfig[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};

Object.keys(db).forEach((model) => {
  db[model].associate(db);
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

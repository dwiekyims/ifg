import Sequelize from "sequelize";
import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _jobs from  "./jobs.js";
import _users from  "./users.js";

import config from "../config/config.js";

const sequelize = new Sequelize(
config.db_name,
config.db_username,
config.db_password,
{
  dialect : "postgres",
  pool : {
    max : 5,
    min : 0,
    acquire : 30000,
    idle : 10000,
  }
}
)

const initModels = (sequelize) => {
  const jobs = _jobs.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  jobs.belongsTo(users, { as: "jobs_user", foreignKey: "jobs_user_id"});
  users.hasMany(jobs, { as: "jobs", foreignKey: "jobs_user_id"});

  return {
    jobs,
    users,
  };
}

const models = initModels(sequelize);

export default models;
export {sequelize};
"use strict";

const {Sequelize}= require("sequelize");
/* const sequelize = new Sequelize('mr_macondo', 'root', '123456789', { //Recuerda cambiar contraseña
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }); */
const sequelize = new Sequelize( 
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  
  
  {
    host: 'db-mysql-nyc3-51687-do-user-17602935-0.0.g.db.ondigitalocean.com' || process.env.DB_HOST,
    dialect: 'mysql',
    port: 25060 || process.env.DB_PORT,
    logging: false
});
module.exports= sequelize;

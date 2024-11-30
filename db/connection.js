"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/* const sequelize = new Sequelize('mr_macondo', 'root', '123456789', { //Recuerda cambiar contraseña
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }); */
const sequelize = new sequelize_1.Sequelize('mr-macondo', 'admin', '123456789', {
  host: 'mr-macondo.c74w8ysa6r4n.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
    logging: false
});
exports.default = sequelize;

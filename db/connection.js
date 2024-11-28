"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/* const sequelize = new Sequelize('mr_macondo', 'root', '123456789', { //Recuerda cambiar contraseña
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }); */
const sequelize = new sequelize_1.Sequelize('mr_macondo', 'root', '123456789', {
    dialect: 'mysql',
    logging: false
});
exports.default = sequelize;

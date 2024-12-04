"use strict";
const { DataTypes } = require("sequelize");
const connection_1 = require("../db/connection");

const Usuario = connection_1.default.define("Usuario", {
  Emp_Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  Contrasenia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IDRol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[1, 2, 3]], // 1: Empleado, 2: Admin, 3: Super Admin
    },
  },
}, {
  tableName: "Usuarios",
  timestamps: false,
});

module.exports = Usuario;

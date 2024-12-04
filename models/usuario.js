"use strict";
const { DataTypes } = require("sequelize");
const connection_1 = require("../db/connection");

const Usuario = connection_1.default.define("Usuario", {
  Emp_Email: {
    type: DataTypes.STRING,
    allowNull: false, // No se permite nulo
    unique: true,     // Debe ser único
    validate: {
      isEmail: true,  // Valida que sea un correo electrónico válido
    },
  },
  Contrasenia: {
    type: DataTypes.STRING,
    allowNull: false,  // No se permite nulo
  },
  IDRol: {
    type: DataTypes.INTEGER,
    allowNull: false,  // No se permite nulo
    validate: {
      isIn: [[1, 2, 3]],  // Limita los valores a 1 (Empleado), 2 (Admin), 3 (Super Admin)
    },
  },
}, {
  tableName: "Usuarios", // Nombre de la tabla en la BD
  timestamps: false,     // Sin createdAt y updatedAt
});

module.exports = Usuario;

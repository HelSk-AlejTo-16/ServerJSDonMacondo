"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Empleado = connection_1.default.define('Empleado', {
    Emp_Nom: {
        type: sequelize_1.DataTypes.STRING
    },
    Ape_Pat: {
        type: sequelize_1.DataTypes.STRING
    },
    Ape_Mat: {
        type: sequelize_1.DataTypes.STRING
    },
    Edad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Emp_Telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    Emp_Email: {
        type: sequelize_1.DataTypes.STRING
    },
    Contrasenia: {
        type: sequelize_1.DataTypes.STRING
    },
    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    IDRol: {
        type: sequelize_1.DataTypes.INTEGER
    },
    IDSucursal: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Empleado;

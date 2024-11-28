"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Usuario = connection_1.default.define('Usuario', {
    Emp_Email: {
        type: sequelize_1.DataTypes.STRING
    },
    Contrasenia: {
        type: sequelize_1.DataTypes.STRING
    },
    IDRol: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Usuario;

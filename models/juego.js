"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Juego = connection_1.default.define('Juego', {
    Nom_Jueg: {
        type: sequelize_1.DataTypes.STRING
    },
    Precio: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    Tiempo: {
        type: sequelize_1.DataTypes.STRING
    },
    Dispon_Jueg: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    Img_Jueg: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Juego;

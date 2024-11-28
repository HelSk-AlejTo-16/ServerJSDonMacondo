"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Producto = connection_1.default.define('Producto', {
    Nom_Prod: {
        type: sequelize_1.DataTypes.STRING
    },
    Tipo_Prod: {
        type: sequelize_1.DataTypes.STRING
    },
    Link_img: {
        type: sequelize_1.DataTypes.STRING
    },
    Exist_Prod: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Prec_Prod: {
        type: sequelize_1.DataTypes.FLOAT
    },
    Desc_Prod: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    IDSucursal: {
        type: sequelize_1.DataTypes.CHAR
    },
    IDDistribuidor: {
        type: sequelize_1.DataTypes.CHAR
    },
    Img_Prod: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Producto;

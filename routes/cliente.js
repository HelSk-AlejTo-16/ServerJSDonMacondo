"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_1 = require("../controllers/cliente");
const routerCliente = (0, express_1.Router)();
routerCliente.post('/', cliente_1.postCliente);
exports.default = routerCliente;

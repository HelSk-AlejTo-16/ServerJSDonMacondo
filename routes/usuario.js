"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const routerLogin = (0, express_1.Router)();
routerLogin.post('/', usuario_1.loginUser);
exports.default = routerLogin;

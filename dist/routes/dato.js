"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dato_1 = require("../controllers/dato");
const routerDato = (0, express_1.Router)();
routerDato.get('/', dato_1.getDatos);
routerDato.get('/:id', dato_1.getDato);
routerDato.delete('/:id', dato_1.deleteDato);
routerDato.post('/', dato_1.postDato);
routerDato.put('/:id', dato_1.updateDato);
exports.default = routerDato;
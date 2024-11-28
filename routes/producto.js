"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_1 = require("../controllers/producto");
const routerProducto = (0, express_1.Router)();
routerProducto.get('/', producto_1.getProducts);
routerProducto.get('/:id', producto_1.getProduct);
routerProducto.delete('/:id', producto_1.deleteProduct);
routerProducto.post('/', producto_1.postProduct);
routerProducto.put('/:id', producto_1.updateProduct);
exports.default = routerProducto;
//1.46

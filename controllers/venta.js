"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVenta = exports.postVenta = exports.deleteVenta = exports.getVenta = exports.getVentas = void 0;
const venta_1 = __importDefault(require("../models/venta"));
const getVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listVentas = yield venta_1.default.findAll();
        res.json(listVentas);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        });
    }
});
exports.getVentas = getVentas;
const getVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const venta = yield venta_1.default.findByPk(id);
    if (venta) {
        res.json(venta);
    }
    else {
        res.status(404).json({ msg: `No existe la venta con la id: ${id}` });
    }
});
exports.getVenta = getVenta;
const deleteVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const venta = yield venta_1.default.findByPk(id);
    if (!venta) {
        res.status(404).json({ msg: `No existe la  venta con la id: ${id}` });
    }
    else {
        yield venta.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        });
    }
});
exports.deleteVenta = deleteVenta;
const postVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield venta_1.default.create(body);
        res.json({
            msg: 'La venta fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.postVenta = postVenta;
const updateVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const venta = yield venta_1.default.findByPk(id);
    try {
        if (venta) {
            yield venta.update(body);
            res.json({
                msg: 'La venta fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe la venta con la id: ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.updateVenta = updateVenta;

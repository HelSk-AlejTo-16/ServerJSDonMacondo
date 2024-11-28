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
exports.updatedistribuidor = exports.postdistribuidor = exports.deletedistribuidor = exports.getdistribuidor = exports.getdistribuidors = void 0;
const distribuidors_1 = __importDefault(require("../models/distribuidors"));
const getdistribuidors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listdistribuidors = yield distribuidors_1.default.findAll();
        res.json(listdistribuidors);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        });
    }
});
exports.getdistribuidors = getdistribuidors;
const getdistribuidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const distribuidor = yield distribuidors_1.default.findByPk(id);
    if (distribuidor) {
        res.json(distribuidor);
    }
    else {
        res.status(404).json({ msg: `No existe la venta con la id: ${id}` });
    }
});
exports.getdistribuidor = getdistribuidor;
const deletedistribuidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const distribuidor = yield distribuidors_1.default.findByPk(id);
    if (!distribuidor) {
        res.status(404).json({ msg: `No existe la  venta con la id: ${id}` });
    }
    else {
        yield distribuidor.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        });
    }
});
exports.deletedistribuidor = deletedistribuidor;
const postdistribuidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield distribuidors_1.default.create(body);
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
exports.postdistribuidor = postdistribuidor;
const updatedistribuidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const distribuidor = yield distribuidors_1.default.findByPk(id);
    try {
        if (distribuidor) {
            yield distribuidor.update(body);
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
exports.updatedistribuidor = updatedistribuidor;

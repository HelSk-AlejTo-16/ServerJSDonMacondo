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
exports.updateSucursal = exports.postSucursal = exports.deleteSucursal = exports.getSucursal = exports.getSucursales = void 0;
const sucursal_1 = __importDefault(require("../models/sucursal"));
const getSucursales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listSucursales = yield sucursal_1.default.findAll();
        res.json(listSucursales);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        });
    }
});
exports.getSucursales = getSucursales;
const getSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const sucursal = yield sucursal_1.default.findByPk(id);
    if (sucursal) {
        res.json(sucursal);
    }
    else {
        res.status(404).json({ msg: `No existe la sucursal con la id: ${id}` });
    }
});
exports.getSucursal = getSucursal;
const deleteSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const sucursal = yield sucursal_1.default.findByPk(id);
    if (!sucursal) {
        res.status(404).json({ msg: `No existe la sucursal con la id: ${id}` });
    }
    else {
        yield sucursal.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        });
    }
});
exports.deleteSucursal = deleteSucursal;
const postSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield sucursal_1.default.create(body);
        res.json({
            msg: 'El producto fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.postSucursal = postSucursal;
const updateSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const sucursal = yield sucursal_1.default.findByPk(id);
    try {
        if (sucursal) {
            yield sucursal.update(body);
            res.json({
                msg: 'El producto fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe la sucursal con la id: ${id}`
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
exports.updateSucursal = updateSucursal;

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
exports.updateTipProds = exports.postTipProds = exports.deleteTipProds = exports.getTip_prods = exports.getTip_prodss = void 0;
const tip_prods_1 = __importDefault(require("../models/tip_prods"));
const getTip_prodss = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listTip_prods = yield tip_prods_1.default.findAll();
        res.json(listTip_prods);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        });
    }
});
exports.getTip_prodss = getTip_prodss;
const getTip_prods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipprods = yield tip_prods_1.default.findByPk(id);
    if (tipprods) {
        res.json(tipprods);
    }
    else {
        res.status(404).json({ msg: `No existe la venta con la id: ${id}` });
    }
});
exports.getTip_prods = getTip_prods;
const deleteTipProds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipprods = yield tip_prods_1.default.findByPk(id);
    if (!tipprods) {
        res.status(404).json({ msg: `No existe la  venta con la id: ${id}` });
    }
    else {
        yield tipprods.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        });
    }
});
exports.deleteTipProds = deleteTipProds;
const postTipProds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield tip_prods_1.default.create(body);
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
exports.postTipProds = postTipProds;
const updateTipProds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const tipoprods = yield tip_prods_1.default.findByPk(id);
    try {
        if (tipoprods) {
            yield tipoprods.update(body);
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
exports.updateTipProds = updateTipProds;

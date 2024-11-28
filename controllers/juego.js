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
exports.updateJuego = exports.postJuego = exports.deleteJuego = exports.getJuego = exports.getJuegos = void 0;
const juego_1 = __importDefault(require("../models/juego"));
const getJuegos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listJuegos = yield juego_1.default.findAll();
        res.json(listJuegos);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        });
    }
});
exports.getJuegos = getJuegos;
const getJuego = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const juego = yield juego_1.default.findByPk(id);
    if (juego) {
        res.json(juego);
    }
    else {
        res.status(404).json({ msg: `No existe la sucursal con la id: ${id}` });
    }
});
exports.getJuego = getJuego;
const deleteJuego = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const juego = yield juego_1.default.findByPk(id);
    if (!juego) {
        res.status(404).json({ msg: `No existe la sucursal con la id: ${id}` });
    }
    else {
        yield juego.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        });
    }
});
exports.deleteJuego = deleteJuego;
const postJuego = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield juego_1.default.create(body);
        res.json({
            msg: 'El juego fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.postJuego = postJuego;
const updateJuego = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const juego = yield juego_1.default.findByPk(id);
    try {
        if (juego) {
            yield juego.update(body);
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
exports.updateJuego = updateJuego;

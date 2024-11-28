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
exports.updateDato = exports.postDato = exports.deleteDato = exports.getDato = exports.getDatos = void 0;
const dato_1 = __importDefault(require("../models/dato"));
const getDatos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listDatos = yield dato_1.default.findAll();
        res.json(listDatos);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        });
    }
});
exports.getDatos = getDatos;
const getDato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dato = yield dato_1.default.findByPk(id);
    if (dato) {
        res.json(dato);
    }
    else {
        res.status(404).json({ msg: `No existen con los datos` });
    }
});
exports.getDato = getDato;
const deleteDato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dato = yield dato_1.default.findByPk(id);
    if (!dato) {
        res.status(404).json({ msg: `No existe los datos` });
    }
    else {
        yield dato.destroy();
        res.json({
            msg: 'Los datos han sido eliminados'
        });
    }
});
exports.deleteDato = deleteDato;
const postDato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield dato_1.default.create(body);
        res.json({
            msg: 'El dato fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.postDato = postDato;
const updateDato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const dato = yield dato_1.default.findByPk(id);
    try {
        if (dato) {
            yield dato.update(body);
            res.json({
                msg: 'Los datos fueron actualizados con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `El dato no existe`
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
exports.updateDato = updateDato;

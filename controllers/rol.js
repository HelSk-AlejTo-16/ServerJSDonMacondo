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
exports.updateRol = exports.postRol = exports.deleteRol = exports.getRol = exports.getRoles = void 0;
const rol_1 = __importDefault(require("../models/rol"));
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listRoles = yield rol_1.default.findAll();
        res.json(listRoles);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        });
    }
});
exports.getRoles = getRoles;
const getRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rol = yield rol_1.default.findByPk(id);
    if (rol) {
        res.json(rol);
    }
    else {
        res.status(404).json({ msg: `No existe la sucursal con la id: ${id}` });
    }
});
exports.getRol = getRol;
const deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rol = yield rol_1.default.findByPk(id);
    if (!rol) {
        res.status(404).json({ msg: `No existe el rol con la id: ${id}` });
    }
    else {
        yield rol.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        });
    }
});
exports.deleteRol = deleteRol;
const postRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield rol_1.default.create(body);
        res.json({
            msg: 'El rol fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.postRol = postRol;
const updateRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const rol = yield rol_1.default.findByPk(id);
    try {
        if (rol) {
            yield rol.update(body);
            res.json({
                msg: 'El rol fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe la rol con la id: ${id}`
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
exports.updateRol = updateRol;

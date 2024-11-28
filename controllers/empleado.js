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
exports.updateEstadoEmpleado = exports.updateEmpleado = exports.postEmpleado = exports.deleteEmpleado = exports.getEmpleado = exports.getEmpleados = void 0;
const empleado_1 = __importDefault(require("../models/empleado"));
const getEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listEmpleados = yield empleado_1.default.findAll();
        res.json(listEmpleados);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        });
    }
});
exports.getEmpleados = getEmpleados;
const getEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const empleado = yield empleado_1.default.findByPk(id);
    if (empleado) {
        res.json(empleado);
    }
    else {
        res.status(404).json({ msg: `No existe el empleado con la id: ${id}` });
    }
});
exports.getEmpleado = getEmpleado;
const deleteEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const empleado = yield empleado_1.default.findByPk(id);
        if (!empleado) {
            return res.status(404).json({ msg: `No existe el empleado con la id: ${id}` });
        }
        yield empleado.destroy();
        res.json({ msg: 'El empleado fue eliminado con éxito' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al eliminar el empleado' });
    }
});
exports.deleteEmpleado = deleteEmpleado;
const postEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { Emp_Email } = req.body;
    const email = yield empleado_1.default.findOne({ where: { Emp_Email: Emp_Email } });
    if (email) {
        return res.status(400).json({
            msg: 'El email ya esta registrado en la base de datos'
        });
    }
    try {
        yield empleado_1.default.create(body);
        res.json({
            msg: 'El empleado fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.postEmpleado = postEmpleado;
const updateEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const empleado = yield empleado_1.default.findByPk(id);
    try {
        if (empleado) {
            yield empleado.update(body);
            res.json({
                msg: 'El empleado fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el empleado con la id: ${id}`
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
exports.updateEmpleado = updateEmpleado;
const updateEstadoEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { estado } = req.body;
    try {
        const empleado = yield empleado_1.default.findByPk(id);
        if (!empleado) {
            return res.status(404).json({
                msg: `No existe el empleado con la id: ${id}`
            });
        }
        yield empleado.update({ Estado: estado });
        res.json({
            msg: 'El estado del empleado ha sido actualizado correctamente'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar el estado del empleado'
        });
    }
});
exports.updateEstadoEmpleado = updateEstadoEmpleado;

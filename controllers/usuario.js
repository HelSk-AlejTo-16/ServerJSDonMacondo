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
exports.loginUser = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Emp_Email, Contrasenia } = req.body;
        const usuario = yield usuario_1.default.findOne({ where: { Emp_Email: Emp_Email }, attributes: ['id', 'IDRol', 'Contrasenia'] });
        //Validamos que el ususuario exista en la bd
        if (!usuario) {
            return res.status(400).json({
                msg: `No existe un usuario con el email ${Emp_Email} en la base de datos`
            });
        }
        //Validamos contrasenia
        const isPasswordValid = Contrasenia === usuario.get('Contrasenia');
        if (!isPasswordValid) {
            return res.status(400).json({
                msg: 'La contraseña es incorrecta'
            });
        }
        //Generamos un token
        const token = jsonwebtoken_1.default.sign({
            username: usuario
        }, process.env.SECRET_KEY || 'reprobadosporbaratos');
        return res.json({
            id: usuario.get('id'),
            IDRol: usuario.get('IDRol'),
            token
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error'
        });
    }
});
exports.loginUser = loginUser;

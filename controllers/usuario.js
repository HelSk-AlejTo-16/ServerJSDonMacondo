"use strict";
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(resolve => resolve(value)); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(e)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));

const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      console.log("Datos recibidos:", req.body); // Log para verificar datos recibidos
  
      const { Emp_Email, Contrasenia } = req.body;
  
      if (!Emp_Email || !Contrasenia) {
        return res.status(400).json({
          msg: "El correo electrónico y la contraseña son obligatorios",
        });
      }
  
      const usuario = yield usuario_1.default.findOne({
        where: { Emp_Email: Emp_Email },
        attributes: ['id', 'IDRol', 'Contrasenia'],
      });
  
      console.log("Resultado de la consulta:", usuario); // Log del usuario encontrado
  
      if (!usuario) {
        return res.status(400).json({
          msg: `No existe un usuario con el email ${Emp_Email}`,
        });
      }
  
      const isPasswordValid = Contrasenia.trim() === usuario.get('Contrasenia').trim();
      console.log("Contraseña recibida:", Contrasenia);
      console.log("Contraseña en BD:", usuario.get('Contrasenia'));
      console.log("¿Contraseña válida?:", isPasswordValid);
  
      if (!isPasswordValid) {
        return res.status(400).json({
          msg: "La contraseña es incorrecta",
        });
      }
  
      const token = jsonwebtoken_1.default.sign(
        { id: usuario.get('id'), IDRol: usuario.get('IDRol') },
        process.env.SECRET_KEY || 'reprobadosporbaratos',
        { expiresIn: '1h' }
      );
  
      return res.json({
        id: usuario.get('id'),
        IDRol: usuario.get('IDRol'),
        token,
      });
    } catch (error) {
      console.error("Error en loginUser:", error);
      res.status(500).json({ msg: "Error en el servidor" });
    }
  });
  
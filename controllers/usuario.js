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
      // Log para verificar datos recibidos
      console.log("Datos recibidos del frontend:", req.body);
  
      const { Emp_Email, Contrasenia } = req.body;
  
      // Validación de campos requeridos
      if (!Emp_Email || !Contrasenia) {
        return res.status(400).json({
          msg: "El correo electrónico y la contraseña son obligatorios"
        });
      }
  
      // Consulta del usuario en la base de datos
      const usuario = yield usuario_1.default.findOne({
        where: { Emp_Email: Emp_Email.trim() }, // Trimear espacios en el email
        attributes: ['id', 'IDRol', 'Contrasenia']
      });
  
      if (!usuario) {
        console.error(`No existe un usuario con el email ${Emp_Email}`);
        return res.status(400).json({
          msg: `No existe un usuario con el email ${Emp_Email}`
        });
      }
  
      // Validación de la contraseña
      const isPasswordValid = Contrasenia === usuario.get('Contrasenia'); // Cambiar si usas cifrado
      if (!isPasswordValid) {
        console.error("Contraseña incorrecta para el usuario:", Emp_Email);
        return res.status(400).json({
          msg: "La contraseña es incorrecta"
        });
      }
  
      // Generación del token
      const token = jsonwebtoken_1.default.sign(
        { id: usuario.get('id'), IDRol: usuario.get('IDRol') },
        process.env.SECRET_KEY || 'reprobadosporbaratos',
        { expiresIn: '1h' } // Expira en 1 hora
      );
  
      console.log('Usuario autenticado correctamente:', usuario.get('id'));
  
      return res.json({
        id: usuario.get('id'),
        IDRol: usuario.get('IDRol'),
        token
      });
    } catch (error) {
      console.error("Error en loginUser:", error);
      res.status(500).json({ msg: "Error en el servidor" });
    }
  });
  

exports.loginUser = loginUser;

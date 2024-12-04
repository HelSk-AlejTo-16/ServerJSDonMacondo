"use strict";
const express = require("express");
const cors = require("cors");

const sequelize = require("./../db/connection");
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

const sucursal_1 = __importDefault(require("../routes/sucursal"));
const connection_1 = __importDefault(require("../db/connection"));
const producto_1 = __importDefault(require("../routes/producto"));
const venta_1 = __importDefault(require("../routes/venta"));
const juego_1 = __importDefault(require("../routes/juego"));
const empleado_1 = __importDefault(require("../routes/empleado"));
const rol_1 = __importDefault(require("../routes/rol"));
const dato_1 = __importDefault(require("../routes/dato"));
const tip_prods_1 = __importDefault(require("../routes/tip_prods"));
const distribuidors_1 = __importDefault(require("../routes/distribuidors"));
const notas_1 = __importDefault(require("../routes/notas"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cliente_1 = __importDefault(require("../routes/cliente"));





class Server {
    constructor() {
        //this.app = (0, express_1.default)();
        this.app = express();
        this.port = process.env.PORT || '25060';
        this.midlewares();
        this.routes();
        this.dbConnect();
        this.listen();
        
        
        
       
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working'
            });
        });
        this.app.use('/api/sucursales', sucursal_1.default);
        this.app.use('/api/productos', producto_1.default);
        this.app.use('/api/ventas',  venta_1.default);
        this.app.use('/api/juegos', juego_1.default);
        this.app.use('/api/empleados', empleado_1.default);
        this.app.use('/api/roles', rol_1.default);
        this.app.use('/api/datos', dato_1.default);
        this.app.use('/api/tip_Prod', tip_prods_1.default);
        this.app.use('/api/distribuidors', distribuidors_1.default);
        this.app.use('/api/Notas', notas_1.default);
        this.app.use('/api/login', usuario_1.default);
        this.app.use('/api/clientes', cliente_1.default);
    }
    midlewares() {
        //Parseamos el body
        this.app.use(express.json());
        //Cors
        this.app.use(cors());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectase a la base de datos');
            }
        });
    }
}
require("dotenv").config(); // Asegúrate de cargar las variables de entorno

console.log("Variables de entorno:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);

module.exports = new Server();
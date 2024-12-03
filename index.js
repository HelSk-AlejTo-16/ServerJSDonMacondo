"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./models/server"));
const dotenv_1 = __importDefault(require("dotenv"));

// Configuración de valores de ambiente (env)
dotenv_1.default.config();
require("dotenv").config(); // Asegúrate de cargar las variables de entorno

// Usa directamente la instancia exportada
const server = server_1.default;

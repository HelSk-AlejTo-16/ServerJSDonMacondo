"use strict";
const bcrypt = require('bcrypt'); // Asegúrate de tener bcrypt instalado
const jsonwebtoken_1 = require("jsonwebtoken");
const usuario_1 = require("../models/usuario");

const loginUser = async (req, res) => {
    try {
        console.log("Datos recibidos:", req.body);

        const { Emp_Email, Contrasenia } = req.body;

        // Validación de campos
        if (!Emp_Email || !Contrasenia) {
            return res.status(400).json({ msg: "El correo y la contraseña son obligatorios" });
        }

        // Normalizar el correo (quita espacios y lo convierte a minúsculas)
        const emailNormalizado = Emp_Email.trim().toLowerCase();

        // Consulta a la base de datos
        const usuario = await usuario_1.default.findOne({
            where: { Emp_Email: emailNormalizado },
            attributes: ['id', 'IDRol', 'Contrasenia']
        });

        if (!usuario) {
            return res.status(404).json({ msg: `No existe un usuario con el email ${Emp_Email}` });
        }

        // Validar la contraseña con bcrypt (si usas hashing)
        const isPasswordValid = await bcrypt.compare(Contrasenia, usuario.get('Contrasenia'));
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "La contraseña es incorrecta" });
        }

        // Generar el token JWT
        const token = jsonwebtoken_1.sign(
            { id: usuario.get('id'), IDRol: usuario.get('IDRol') },
            process.env.SECRET_KEY || 'reprobadosporbaratos',
            { expiresIn: '1h' }
        );

        // Respuesta exitosa
        return res.status(200).json({
            id: usuario.get('id'),
            IDRol: usuario.get('IDRol'),
            token
        });
    } catch (error) {
        console.error("Error en loginUser:", error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

module.exports = { loginUser };

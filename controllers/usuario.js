"use strict";
const usuario_1 = require("../models/usuario");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);

    const { Emp_Email, Contrasenia } = req.body;

    // Validación de campos requeridos
    if (!Emp_Email || !Contrasenia) {
      return res.status(400).json({
        msg: "El correo electrónico y la contraseña son obligatorios",
      });
    }

    // Consulta del usuario en la base de datos
    const usuario = await usuario_1.default.findOne({
      where: { Emp_Email: Emp_Email },
      attributes: ["id", "IDRol", "Contrasenia"],
    });

    if (!usuario) {
      return res.status(400).json({
        msg: `No existe un usuario con el email ${Emp_Email}`,
      });
    }

    // Validación de la contraseña (texto plano)
    if (Contrasenia !== usuario.Contrasenia) {
      return res.status(400).json({
        msg: "La contraseña es incorrecta",
      });
    }

    // Generación del token
    const token = jwt.sign(
      { id: usuario.id, IDRol: usuario.IDRol },
      process.env.SECRET_KEY || "clave_secreta",
      { expiresIn: "1h" }
    );

    return res.json({
      id: usuario.id,
      IDRol: usuario.IDRol,
      token,
    });
  } catch (error) {
    console.error("Error en loginUser:", error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

module.exports = { loginUser };

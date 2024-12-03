"use strict";

const {Sequelize}= require("sequelize");
/* const sequelize = new Sequelize('mr_macondo', 'root', '123456789', { //Recuerda cambiar contraseña
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }); */
const sequelize = new Sequelize( 
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario
  process.env.DB_PASSWORD, // Contraseña
  
  
  {
    host: process.env.DB_HOST, // Host
    dialect: "mysql", // Tipo de base de datos
    port: process.env.DB_PORT || 3306, // Puerto (por defecto 3306 para MySQL)
    logging: false, // Desactivar logging de consultas en consola
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Cambiar a true si usas un certificado válido
      },
    },
  }
);

// Probar la conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
  }
})();

module.exports = sequelize;
import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
  Emp_Email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Contrasenia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  IDRol: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Usuario;

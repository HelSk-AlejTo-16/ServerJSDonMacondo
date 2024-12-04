import Usuario from '../models/usuario';
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);

    const { Emp_Email, Contrasenia } = req.body;

    if (!Emp_Email || !Contrasenia) {
      return res.status(400).json({ msg: 'El correo electrónico y la contraseña son obligatorios' });
    }

    const usuario = await Usuario.findOne({
      where: { Emp_Email },
      attributes: ['id', 'IDRol', 'Contrasenia']
    });

    if (!usuario) {
      return res.status(404).json({ msg: `No existe un usuario con el email ${Emp_Email}` });
    }

    const isPasswordValid = Contrasenia === usuario.get('Contrasenia');
    if (!isPasswordValid) {
      return res.status(401).json({ msg: 'La contraseña es incorrecta' });
    }

    const token = jwt.sign(
      { id: usuario.get('id'), IDRol: usuario.get('IDRol') },
      process.env.SECRET_KEY || 'reprobadosporbaratos',
      { expiresIn: '1h' }
    );

    return res.json({
      id: usuario.get('id'),
      IDRol: usuario.get('IDRol'),
      token
    });
  } catch (error) {
    console.error('Error en loginUser:', error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

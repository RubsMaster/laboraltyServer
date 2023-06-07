import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/admin/Admin.js';
import { SECRET_KEY } from "../config.js";


export const logInUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Buscar el administrador en la base de datos
    const admin = await Admin.findOne({ username });
    if (!admin) {
      // El administrador no existe en la base de datos
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }

    // Verificar la contraseña encriptada
     const isPasswordCorrect = await bcrypt.compare(password, admin.password);
     if (!isPasswordCorrect) {
       // La contraseña no es correcta
       return res.status(400).json({ message: 'Contraseña incorrecta' });
     }

    // Crear un token de autenticación con JWT
    const token = jwt.sign({ id: admin._id, username: Admin.username }, SECRET_KEY, { expiresIn: '1h' });
    
    // Enviar el token de autenticación en la respuesta
    res.status(200).json({ message:'OK', token });
  } catch (error) {
    // Error del servidor
    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const changePassword = async (req, res) => {
  const { userId } = res.locals.jwtPayload;
  const { oldPassword, newPassword } = req.body;

  try {
    //buscamos el usuario por el id
    const user = await Admin.findById(userId);
    if (!user) {
      // El usuario no existe en la base de datos
      return res.status(404).json({ message: 'User not found' });
    }
    // Verificar la contraseña antigua
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    //encriptacion 
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
    //Envia la resopuesta satisfactoria
    return res.json({ message: 'Password changed successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


import bcrypt from 'bcrypt';
import Credential from "../models/Credential.js";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../config.js";

export const createCredential = async (req, res) => {
    const { user, password, role, relatedId } = req.body;

    // Encriptación de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newCredential = new Credential({
        user,
        password: hashedPassword, // Asignar la contraseña encriptada
        role,
        relatedId
    });
    
    await newCredential.save();
    console.log('Credential created successfully');
    
    return res.json(newCredential);
};


// export const deleteUser = async (req, res) => {
//     const post = await Users.findByIdAndDelete(req.params.id);
//     if (!post) return res.sendStatus(404);
//     return res.sendStatus(204);
// };

 export const getAllCredentials = async (req, res) => {
     const credentials = await Credential.find();
     res.send(credentials)
 }

 export const getCredential = async (req, res) => {
     const cred = await Credential.findOne({ user: req.params.name})
     res.send(cred)
 }

 export const logInUser = async (req, res) => {
  const { user, password } = req.body;

  if (!(user && password)) {
    return res.status(400).json({ message: 'user and password are required!' });
  }

  try {
    const foundUser = await Credential.findOne({ user });

    if (!foundUser || !(await bcrypt.compare(password, foundUser.password))) {
      return res.status(400).json({ message: 'User or password incorrect!' });
    }

    // Generar el token de JWT para el usuario que ha iniciado sesión
    const token = jwt.sign({ userId: foundUser.relatedId, user: Credential.user }, SECRET_KEY, {
      expiresIn: "2h", // El token expira en 2 horas
    });
    res.json({ message: 'OK', token });
  } catch (e) {
    console.error(e); // Mostrar el error en la consola
    return res.status(500).json({ message: 'Internal server error' });
  }
}


//  export const logInUser = async (req, res) => {
//     const { user, password } = req.body;
//     try {
//       // Buscar el administrador en la base de datos
//       const admin = await Admin.findOne({ user });
//       if (!admin) {
//         // El administrador no existe en la colección Credential
//         // Intentar buscar en otra colección
//         const accountant = await Credential.findOne({ user });
//         if (!accountant) {
//           // El administrador no existe en la otra colección
//           return res.status(404).json({ message: 'Usuario no encontrado' });
//         }
//         // Verificar la contraseña encriptada para el usuario encontrado en la otra colección
//         const isPasswordCorrect = await bcrypt.compare(password, accountant.password);
//         if (!isPasswordCorrect) {
//           // La contraseña no es correcta
//           return res.status(400).json({ message: 'Contraseña incorrecta' });
//         }
//         // Crear un token de autenticación con JWT para el usuario encontrado en la otra colección
//         const token = jwt.sign({ id: accountant._id, user: Credential.user }, SECRET_KEY, { expiresIn: '1h' });

//         // Enviar el token de autenticación en la respuesta
//         return res.status(200).json({ message: 'OK', token });
//       }
  
//       // Verificar la contraseña encriptada para el administrador encontrado en la colección Credential
//       const isPasswordCorrect = await bcrypt.compare(password, admin.password);
//       if (!isPasswordCorrect) {
//         // La contraseña no es correcta
//         return res.status(400).json({ message: 'Contraseña incorrecta' });
//       }
  
//       // Crear un token de autenticación con JWT para el administrador encontrado en la colección Credential
//       const token = jwt.sign({ id: admin._id, user: Admin.user }, SECRET_KEY, { expiresIn: '1h' });
  
//       // Enviar el token de autenticación en la respuesta
//       res.status(200).json({ message: 'OK', token });
//     } catch (error) {
//       // Error del servidor
//       res.status(500).json({ message: 'Error del servidor' });
//     }
//   };

  
  export const changePassword = async (req, res) => {
    const { relatedId } = res.locals.jwtPayload;
    const { oldPassword, newPassword } = req.body;
  
    try {
      //buscamos el usuario por el id en ambas colecciones
      const credentials = await Credentials.findById(relatedId);
  
      // Si no encuentra al usuario en ninguna de las dos colecciones
      if ( !credentials) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Seleccionar el usuario que fue encontrado
      const user = credentials;
  
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
  

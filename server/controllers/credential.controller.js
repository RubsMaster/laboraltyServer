import bcrypt from 'bcrypt';
import Credential from "../models/Credential.js";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../config.js";
import Admin from '../models/admin/Admin.js';

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
    try {
      // Buscar el administrador en la base de datos
      const admin = await Admin.findOne({ user });
      if (!admin) {
        // El administrador no existe en la colección Credential
        // Intentar buscar en otra colección
        const accountant = await Credential.findOne({ user });
        if (!accountant) {
          // El administrador no existe en la otra colección
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        // Verificar la contraseña encriptada para el usuario encontrado en la otra colección
        const isPasswordCorrect = await bcrypt.compare(password, accountant.password);
        if (!isPasswordCorrect) {
          // La contraseña no es correcta
          return res.status(400).json({ message: 'Contraseña incorrecta' });
        }
        // Crear un token de autenticación con JWT para el usuario encontrado en la otra colección
        const token = jwt.sign({ id: accountant._id, user: Credential.user }, SECRET_KEY, { expiresIn: '1h' });

        // Enviar el token de autenticación en la respuesta
        return res.status(200).json({ message: 'OK', token });
      }
  
      // Verificar la contraseña encriptada para el administrador encontrado en la colección Credential
      const isPasswordCorrect = await bcrypt.compare(password, admin.password);
      if (!isPasswordCorrect) {
        // La contraseña no es correcta
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }
  
      // Crear un token de autenticación con JWT para el administrador encontrado en la colección Credential
      const token = jwt.sign({ id: admin._id, user: Admin.user }, SECRET_KEY, { expiresIn: '1h' });
  
      // Enviar el token de autenticación en la respuesta
      res.status(200).json({ message: 'OK', token });
    } catch (error) {
      // Error del servidor
      res.status(500).json({ message: 'Error del servidor' });
    }
  };


//  export const logInUser = async (req, res) => {
//     const { user, password } = req.body;
//     try {
//       // Buscar el administrador en la base de datos
//       const loggedUser = await Admin.findOne({ user });
//       if (!loggedUser) {
//         // El administrador no existe en la base de datos
//         const otherUser = await Credential.findOne({ user });
//         if (!otherUser) {
//           // El administrador no existe en la otra colección
//           return res.status(404).json({ message: 'Usuario no encontrado' });
//         }
//       }
//       const isPasswordCorrect = await bcrypt.compare(password, otherUser.password);
//       if (!isPasswordCorrect) {
//         // La contraseña no es correcta
//         return res.status(400).json({ message: 'Contraseña incorrecta' });
//       }
//       // Crear un token de autenticación con JWT para el usuario encontrado en la otra colección
//       const token = jwt.sign({ id: otherUser._id, user: OtherCollection.user }, SECRET_KEY, { expiresIn: '1h' });
//       // Enviar el token de autenticación en la respuesta
//       return res.status(200).json({ message: 'OK', token });
//     }
//       // Verificar la contraseña encriptada
//        const isPasswordCorrect = await bcrypt.compare(password, loggedUser.password);
//        if (!isPasswordCorrect) {
//          // La contraseña no es correcta
//          return res.status(400).json({ message: 'Contraseña incorrecta' });
//        }
  
//       // Crear un token de autenticación con JWT
//       const token = jwt.sign({ id: loggedUser._id, user: Admin.user }, SECRET_KEY, { expiresIn: '1h' });
      
//       // Enviar el token de autenticación en la respuesta
//       res.status(200).json({ message:'OK', token });
//     } catch (error) {
//       // Error del servidor
//       res.status(500).json({ message: 'Error del servidor' });
//     }
//   };
  

// export const updateUser = async (req, res) => {
//     const {
//       businessName,
//       RFC,
//       firstNameTitular,
//       lastNameTitular,
//       email,
//       street,
//       innerNumber,
//       outdoorNumber,
//       zipCode,
//       suburb,
//       city,
//       state,
//       officePhoneNumber,
//       mobilePhoneNumber,
//       totalEmployees,
//       totalRFC,
//       monthlyDebt,
//       userAssigned,
//       passwordAssigned
//     } = req.body;
  
//     let user = await Users.findById(req.params.id);
  
//     if (!user) {
//       res.status(404).json({msg: 'No existe el usuario'})
//     }
  
//     // Validar cada variable antes de asignarla al usuario
//     user.businessName = businessName ? businessName : user.businessName;
//     user.RFC = RFC ? RFC : user.RFC;
//     user.firstNameTitular = firstNameTitular ? firstNameTitular : user.firstNameTitular;
//     user.lastNameTitular = lastNameTitular ? lastNameTitular : user.lastNameTitular;
//     user.email = email ? email : user.email;
//     user.street = street ? street : user.street;
//     user.innerNumber = innerNumber ? innerNumber : user.innerNumber;
//     user.outdoorNumber = outdoorNumber ? outdoorNumber : user.outdoorNumber;
//     user.zipCode = zipCode ? zipCode : user.zipCode;
//     user.suburb = suburb ? suburb : user.suburb;
//     user.city = city ? city : user.city;
//     user.state = state ? state : user.state;
//     user.officePhoneNumber = officePhoneNumber ? officePhoneNumber : user.officePhoneNumber;
//     user.mobilePhoneNumber = mobilePhoneNumber ? mobilePhoneNumber : user.mobilePhoneNumber;
//     user.totalEmployees = totalEmployees ? totalEmployees : user.totalEmployees;
//     user.totalRFC = totalRFC ? totalRFC : user.totalRFC;
//     user.monthlyDebt = monthlyDebt ? monthlyDebt : user.monthlyDebt;
//     user.userAssigned = userAssigned ? userAssigned : user.userAssigned;
//     user.passwordAssigned = passwordAssigned ? passwordAssigned : user.passwordAssigned;
  
//     await user.save()
//     res.send(user);
//   }

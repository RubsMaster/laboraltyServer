//  admin.controller.js
 import bcrypt from 'bcrypt';
 import Admin from '../models/Admin.js';

 export const createAdmin = async  (req, res) => {
   const { username, password, role } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);
   const admin = new Admin({
     username,
     password: hashedPassword,
     role
   });
   await admin.save();
   return res.status(200).json(admin);
 }

export const getAdmins = async (req, res) => {
  try {
    const users = await Admin.find();
    res.send(users)
  } catch (error) {
      return res.status(400).json({message:'Something wrong!'})
  }
  }

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  await Admin.findByIdAndDelete(req.params.id);
  return res.json({ message: 'Administrador eliminado correctamente' });
}

export const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { username, role } = req.body;

  try {
    // Buscar el administrador que se quiere actualizar por su ID
    const adminToUpdate = await Admin.findById(id);
    // Verificar si el administrador existe
    if (!adminToUpdate) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }
    // Actualizar los campos del administrador con los nuevos valores
    adminToUpdate.username = username || adminToUpdate.username;
    adminToUpdate.role = role || adminToUpdate.role
    // Guardar los cambios en la base de datos
    await adminToUpdate.save();
    // Responder con el administrador actualizado
    return res.json(adminToUpdate);
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el administrador' });
  }
}


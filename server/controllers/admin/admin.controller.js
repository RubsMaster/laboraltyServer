//  admin.controller.js
 import bcrypt from 'bcrypt';
 import Admin from '../../models/admin/Admin.js';

 export const createAdmin = async  (req, res) => {
   const { user, password, role } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);
   const admin = new Admin({
     user,
     password: hashedPassword,
     role
   });
   console.log("admin" + admin)
   await admin.save();
   return res.json(admin);
 }

export const getAllAdmins = async (req, res) => {
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

export const getAdmin = async (req, res) => {
  try {
    console.log(req.params.id);
    const admin = await Admin.findById(req.params.id);

    if (!admin) {
      // Si no se encontró el admin, enviar una respuesta 404 (No encontrado)
      return res.status(404).send({ message: "Admin not found" });
    }

    // Si se encontró el admin, enviarlo en la respuesta
    res.send(admin);
  } catch (error) {
    // Si hay un error, manejarlo y enviar una respuesta de error
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
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


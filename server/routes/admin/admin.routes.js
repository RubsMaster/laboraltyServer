import { Router } from "express";

//funciones del controller para crear usuarios con el rol de administrador
import {
  createAdmin,
  getAllAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin
} from "../../controllers/admin/admin.controller.js";

//middleware para la autenticacion de los usuarios
import { checkJwt } from "../../middlewares/admin.middleware.js";
import { checkRole } from "../../middlewares/role.middleware.js";

const router = Router();

//Ruta para crear un nuevo administrador
router.post("/createAdmin", createAdmin);
router.get("/getAllAdmins", getAllAdmins);
router.get("/getAdmin/:id", getAdmin);
router.put("/admin/updateUser/:id", updateAdmin);
// Ruta para eliminar un administrador por su ID
router.delete("/admin/delete/:id", [checkJwt, checkRole(['admin'])], deleteAdmin);

export default router;

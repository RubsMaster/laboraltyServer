import { Router } from "express";

//funciones del controller para crear usuarios con el rol de administrador
import {
  createAdmin,
  deleteAdmin,
  getAdmins,
  updateAdmin
} from "../controllers/admin.controller.js";

//middleware para la autenticacion de los usuarios
import { checkJwt } from "../middlewares/admin.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";

const router = Router();

// Ruta para crear un nuevo administrador
router.post("/users/create", [checkJwt, checkRole(['admin'])], createAdmin);


router.get("/users", [checkJwt, checkRole(['admin'])], getAdmins);

router.put("/users/updateUser/:id", [checkJwt, checkRole(['admin'])], updateAdmin);

// Ruta para eliminar un administrador por su ID
router.delete("/users/delete/:id", [checkJwt, checkRole(['admin'])], deleteAdmin);

export default router;

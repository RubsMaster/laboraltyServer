import { Router } from "express";
import { 
    createUser,
    deleteUser,
    getAllUsers,
    updateUser
 } from "../controllers/users.controller.js";

const router = Router();

router.post('/createUser', createUser);
router.get('/getAllUsers', getAllUsers);
router.put('/updateUser/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;
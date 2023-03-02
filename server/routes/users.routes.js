import { Router } from "express";
import { 
    createUser,
    deleteUser,
    getAllUsers,
    putUser
 } from "../controllers/users.controller.js";

const router = Router();

router.post('/createUser', createUser);
router.get('/getAllUsers', getAllUsers);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);
export default router;
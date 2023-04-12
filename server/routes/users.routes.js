import { Router } from "express";
import { 
    createUser,
    getAllUsers,
    updateUser,
    getUser
 } from "../controllers/users.controller.js";

const router = Router();

router.post('/createUser', createUser);
router.get('/getAllUsers', getAllUsers);
router.get('/getUser/:id', getUser);
router.patch('/updateUser/:id', updateUser);

export default router;
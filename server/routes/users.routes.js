import { Router } from "express";
import { 
    createUser,
    getAllUsers
 } from "../controllers/users.controller.js";

const router = Router();

router.post('/createUser', createUser);
router.get('/getAllUsers', getAllUsers);

export default router;
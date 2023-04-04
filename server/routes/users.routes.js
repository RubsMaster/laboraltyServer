import { Router } from "express";
import { 
    createUser,
    deleteUser,
    getAllUsers,
    updateUser,
    getUser
 } from "../controllers/users.controller.js";

const router = Router();

router.post('/createUser', createUser);
router.get('/getAllUsers', getAllUsers);
router.get('/getUser/:id', getUser)
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);
export default router;
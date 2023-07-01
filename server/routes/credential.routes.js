import { Router } from "express";
import { 
    createCredential,
    getAllCredentials,
    getCredential,
    logInUser
 } from "../controllers/credential.controller.js";

 import { checkRole } from "../middlewares/role.middleware.js";


const router = Router();

router.post('/createCredential', createCredential);
router.get('/getAllCredentials', getAllCredentials);
router.get('/getCredential/:name', getCredential);
router.post('/auth/login', logInUser);
// router.post('/auth/change-password', [checkJwt], changePassword);
// router.patch('/updateUser/:id', updateUser);
router.get('/auth/role', checkRole);


export default router;
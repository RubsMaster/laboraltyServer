import { Router } from "express";
import { 
    createCredential,
    getAllCredentials,
    getCredential,
    logInUser
 } from "../controllers/credential.controller.js";

 import { checkRole } from "../middlewares/role.middleware.js";
 import { checkJwt } from "../middlewares/admin.middleware.js";



const router = Router();

router.post('/createCredential', createCredential);
//  router.post('/createCredential', [checkJwt, checkRole(['admin'])], createCredential);
router.get('/getAllCredentials', getAllCredentials);
//router.get('/getAllCredentials', [checkJwt, checkRole(['ACCOUNTANT'])], getAllCredentials);
router.get('/getCredential/:name', getCredential);
router.post('/auth/login', logInUser);
// router.post('/auth/change-password', [checkJwt], changePassword);
// router.patch('/updateUser/:id', updateUser);
router.get('/auth/role', checkRole);


export default router;
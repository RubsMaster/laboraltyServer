import { Router } from "express";
import { 
    createCredential,
    getAllCredentials,
    getCredential
 } from "../controllers/credential.controller.js";


const router = Router();

router.post('/createCredential', createCredential);
router.get('/getAllCredentials', getAllCredentials);
router.get('/getCredential/:name', getCredential);
// router.patch('/updateUser/:id', updateUser);

export default router;
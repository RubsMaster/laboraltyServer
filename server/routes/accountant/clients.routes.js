import { Router } from "express";
import { 
    createClient,
    getAllClients,
    getClient
 } from "../../controllers/accountant/client.controller.js";

const router = Router();

router.post('/createClient', createClient);
router.get('/getAllClients', getAllClients);
router.get('/getClient/:id', getClient);
// router.patch('/updateUser/:id', updateUser);

export default router;
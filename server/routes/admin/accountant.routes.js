import { Router } from "express";
import { 
    createAccountant,
    getAllAccountants,
    updateAccountant,
    getAccountant
 } from "../../controllers/admin/accountant.controller.js";

const router = Router();

router.post('/createAccountant', createAccountant);
router.get('/getAllAccountants', getAllAccountants);
router.get('/getAccountant/:id', getAccountant);
router.patch('/updateUser/:id', updateAccountant);

export default router;
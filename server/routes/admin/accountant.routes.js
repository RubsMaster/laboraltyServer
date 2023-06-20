import { Router } from "express";
import { 
    createAccountant,
    getAccountants,
    updateAccountant,
    getAccountant
 } from "../../controllers/admin/accountant.controller.js";

const router = Router();

router.post('/createAccountant', createAccountant);
router.get('/getAccountants', getAccountants);
router.get('/getAccountant/:id', getAccountant);
router.patch('/updateAccountant/:id', updateAccountant);

export default router;
import { Router } from "express";
import { 
    createAccountnat,
    getAllAccountants,
    updateAccountant,
    getAccountant
 } from "../../controllers/admin/accountant.controller.js";

const router = Router();

router.post('/admin/createAccountant', createAccountnat);
router.get('/admin/getAllAccountant', getAllAccountants);
router.get('/admin/getAccountant/:id', getAccountant);
router.patch('/admin/updateUser/:id', updateAccountant);

export default router;
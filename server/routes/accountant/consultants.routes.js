import { Router } from "express";
import { 
    createConsultant,
    getAllConsultants,
    getConsultant
 } from "../../controllers/accountant/consultant.controller.js";

const router = Router();

router.post('/createConsultant', createConsultant);
router.get('/getAllConsultants', getAllConsultants);
router.get('/getConsultant/:id', getConsultant);

export default router;
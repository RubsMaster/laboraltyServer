import { Router } from "express";
import { 
    createConsultant,
    getAllConsultants,
    getConsultant,
    updateLogoImg
 } from "../../controllers/accountant/consultant.controller.js";

const router = Router();

router.post('/createConsultant', createConsultant);
router.get('/getAllConsultants', getAllConsultants);
router.get('/getConsultant/:id', getConsultant);
router.patch('/updateLogoImg/:id', updateLogoImg)
// router.patch('/updateUser/:id', updateUser);

export default router;
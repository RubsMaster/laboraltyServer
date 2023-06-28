import { Router } from "express";
import { 
    createServiceLog,
    getAllServiceLogs
 } from "../../controllers/accountant/service-log.controller.js";

const router = Router();

router.post('/createServiceLog', createServiceLog);
router.get('/getAllServiceLogs', getAllServiceLogs);
//router.get('/getConsultant/:id', getConsultant);

// router.patch('/updateUser/:id', updateUser);

export default router;
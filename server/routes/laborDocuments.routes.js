import { Router } from "express";
import {
    createLaborDocument,
    getAllDocuments,
    editText
} from "../controllers/laborDocuments.controller.js";

const router = Router();

router.post('/createDoc', createLaborDocument);
router.get('/getAllDocuments', getAllDocuments);
router.put('/editText', editText);

export default router;
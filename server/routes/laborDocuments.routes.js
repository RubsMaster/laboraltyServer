import { Router } from "express";
import {
    createLaborDocument,
    getAllDocuments,
    getTextFromID
} from "../controllers/laborDocuments.controller.js";

const router = Router();

router.post('/createDoc', createLaborDocument);
router.get('/getAllDocuments', getAllDocuments);
router.get('/getTextFromID/:id', getTextFromID);

export default router;
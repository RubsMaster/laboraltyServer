import { Router } from "express";
import {
    createLaborDocument,
    getAllDocuments
} from "../controllers/laborDocuments.controller.js";

const router = Router();

router.post('/createDoc', createLaborDocument);
router.get('/getAllDocuments', getAllDocuments)

export default router;
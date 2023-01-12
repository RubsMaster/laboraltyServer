import { Router } from "express";
import {
    createLaborDocument
} from "../controllers/laborDocuments.controller.js";

const router = Router();

router.post('/createDoc', createLaborDocument);

export default router;
import { Router } from "express";
import {
    createLaborDocument,
    getAllDocuments,
    getDocByName,
    editText,
    getDoc,
    deleteDoc
} from "../../controllers/admin/laborDocuments.controller.js";

const router = Router();

router.post('/createDoc', createLaborDocument);
router.get('/getAllDocuments', getAllDocuments);
router.post('/getDocByName', getDocByName);
router.get('/getDoc/:id', getDoc);
router.delete('/deleteDoc/:id', deleteDoc)
router.put('/editText', editText);

export default router;
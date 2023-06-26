import { Router } from "express";
import { 
    uploadFiles,
    download,
    getListFiles } from "../controllers/file.controller.js";

const router = Router();

router.get('/getAllFiles', getListFiles);

router.post('/uploadImages', uploadFiles);

router.get('/getFile/:name', download);

export default router;
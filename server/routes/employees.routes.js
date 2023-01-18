import { Router } from "express";
import {
    createEmployee,
    getAllEmployees
} from "../controllers/employees.controller.js";

const router = Router();

router.post('/createEmployee', createEmployee)
router.get('/getAllEmployees', getAllEmployees)

export default router;
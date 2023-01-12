import { Router } from "express";
import {
    createEmployee
} from "../controllers/employees.controller.js";

const router = Router();

router.post('/createEmployee', createEmployee)

export default router;
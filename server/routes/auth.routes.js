import { Router } from "express";
import { check } from "express-validator";

import {
    login
} from "../controllers/auth.controller.js";

const router = Router();

router.post('/login', [
    check('user', 'this cannot be empty').isEmpty()
], login)


export default router;
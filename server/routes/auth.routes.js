import { Router } from "express";
import { checkJwt } from "../middlewares/admin.middleware.js";

import {
    loginUser,
    changePassword
} from "../controllers/auth.controller.js";

const router = Router();

router.post('/auth/login', loginUser);

router.post('/auth/change-password', [checkJwt], changePassword);

export default router;
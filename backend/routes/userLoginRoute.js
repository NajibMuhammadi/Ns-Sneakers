import { Router } from 'express';

import UserController from "../controllers/userController.js";

const router = Router();
const controller = new UserController;

router.post('/register',
    controller.registerUser,
);

router.post('/login',
    controller.loginUser,
);

export default router
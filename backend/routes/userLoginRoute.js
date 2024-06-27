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

router.get('/posts', controller.checkAuthUser, (req, res) => {
    res.json({
        success: true,
        message: 'Profile accessed successfully.',
        user: req.user
    });
});

export default router
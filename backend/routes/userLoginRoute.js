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

router.get('/profile', controller.checkAuthUser,(req, res) => {
    res.json({
        success: true,
        message: 'Profile accessed successfully.',
        user: req.user
    });
});

router.get('/allusers', controller.checkAuthUser, controller.checkIsAdmin, controller.getAllUsers);
 
router.put('/insertadmin/:id', controller.checkAuthUser, controller.checkIsAdmin, controller.insertAdminTrue);
router.put('/insertadminfalse/:id', controller.checkAuthUser, controller.checkIsAdmin, controller.isertAdminFalse);

export default router
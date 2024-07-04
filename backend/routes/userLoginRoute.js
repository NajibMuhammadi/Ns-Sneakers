import { Router } from 'express';

import UserController from "../controllers/userController.js";
import upload from '../multer/upload.js';
import {userDb} from '../models/userModels.js';

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
router.post('/upload', controller.checkAuthUser, upload.single('image'), async(req, res) => {
    const userId = req.user.userId;
    const user = await userDb.findOne({ userId });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }

    if(!req.file) {
        return res.status(400).json({
            success: false,
            message: 'No image uploaded'
        });
    }

    userDb.update({ userId }, { $set: { image: req.file.filename } });

    res.status(200).json({
        filename: req.file.filename,
        success: true,
        message: 'Image uploaded successfully'
    });
});

router.get('/profileImage', controller.checkAuthUser, controller.getUserImage);
export default router
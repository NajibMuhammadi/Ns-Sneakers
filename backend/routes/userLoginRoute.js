/* import { Router } from 'express';
import express from 'express';

import UserController from "../controllers/userController.js";
import authenticateMiddleware from '../middleware/authentication.js';

import upload from '../multer/upload.js';


router.post('/upload', authenticateMiddleware.checkAuthUser, upload.single('image'), async(req, res) => {
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
        message: 'Image uploaded successfully',
        image_url: `http://localhost:8085/ns-sneakers/userImage/${req.file.filename}`
    });
});

router.get('/profileImage', authenticateMiddleware.checkAuthUser, controller.getUserImage);

router.get('/logout', controller.logoutUser);
router.get('/getuser', authenticateMiddleware.checkAuthUser, controller.getUserDetails);
router.use('/userImage', express.static('./config/usersImages'));
export default router */
import { Router } from "express";
import express from 'express';
import validateMiddleware from "../middleware/validation.js";
import AuthController from "../controllers/authController.js";
import authentication from "../middleware/authentication.js";
import upload from '../multer/upload.js'

const router = Router();
const controller = new AuthController();

router.post('/register', validateMiddleware.user.register, controller.registerUser);
router.post('/login', validateMiddleware.user.login, controller.loginUser);
router.get('/getuserdetails', authentication.checkAuthUser, controller.getUserDetails);
router.use('/userImage', express.static('/config/usersImages'));
router.post('/upload', authentication.checkAuthUser, upload.single('image'), validateMiddleware.user.userInsertProfileImage, controller.userInsertProfileImage, (req, res) => {
    res.json({
        success: true,
        message: 'Image uploaded successfully',
        image_url: `http://localhost:8085/ns-sneakers/userImage/${req.file.filename}`
    })
});


export default router;
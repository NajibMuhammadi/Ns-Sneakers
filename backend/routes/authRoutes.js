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
router.post('/upload', authentication.checkAuthUser, upload.single('image'),  validateMiddleware.user.userInsertProfileImage, controller.userInsertProfileImage);
router.use('/userImage', express.static('./config/usersImages'));

export default router;
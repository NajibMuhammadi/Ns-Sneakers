import { Router } from "express";
import validateMiddleware from "../middleware/validation.js";
import authenticationMiddleware from "../middleware/authentication.js";
import AuthController from "../controllers/authController.js";

const router = Router();
const controller = new AuthController();

router.get('/allusers', authenticationMiddleware.checkAuthUser, validateMiddleware.user.checkIsAdmin, controller.getAllUser);
router.put('/admintrue/:id', authenticationMiddleware.checkAuthUser, validateMiddleware.user.insertAdminTrue, controller.insertAdminTrue);
router.put('/adminfalse/:id', authenticationMiddleware.checkAuthUser, validateMiddleware.user.insertAdminFalse, controller.insertAdminFalse);

export default router
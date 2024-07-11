import { Router } from "express";
import validateMiddleware from "../middleware/validation.js";
import AuthController from "../controllers/authController.js";

const router = Router();
const controller = new AuthController();

router.post("/register", validateMiddleware.user.register, controller.registerUser);
router.post("/login", validateMiddleware.user.login, controller.loginUser);

export default router;
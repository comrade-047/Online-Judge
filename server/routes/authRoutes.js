import express from "express";
import { login, register,forgotPassword,resetPassword } from "../controllers/authControllers.js";

const router = express.Router();

router.post('/register', register);
router.post('/login',login);
router.post('/forgot-password',forgotPassword);
router.post('/reset-password',resetPassword);

export default router;
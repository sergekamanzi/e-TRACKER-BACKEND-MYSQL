// src/routes/authRoutes.js
import { Router } from 'express';
import { register, login } from '../controller/authController.js'; // Corrected path

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;

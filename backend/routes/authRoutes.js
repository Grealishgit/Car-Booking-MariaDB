import express from 'express';
import { getUserData, login, signup } from '../controller/authContrller.js';


const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/user', getUserData)

export default router;
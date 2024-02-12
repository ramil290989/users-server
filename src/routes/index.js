import express from 'express';
import { loginPath, login } from './login.js';
import { dataPath, data } from './data.js';
import { likePath, like } from './addRemoveLike.js';
import { registerPath, register } from './register.js';

const router = express.Router();

router.post(loginPath, login);
router.get(dataPath, data);
router.post(likePath, like);
router.post(registerPath, register);

export default router;

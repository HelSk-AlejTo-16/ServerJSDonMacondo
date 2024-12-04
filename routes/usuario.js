import { Router } from 'express';
import { loginUser } from '../controllers/usuario';

const routerLogin = Router();
routerLogin.post('/', loginUser);

export default routerLogin;

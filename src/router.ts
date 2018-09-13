import * as Router from 'koa-router';
import * as user from './controller/user';

export const router = new Router();

router.get('/user', user.get);
router.post('/user', user.save);
router.del('/user', user.del);

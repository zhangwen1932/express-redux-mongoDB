import Express from 'express';
import { responseClient } from '../util';

const router = Express.Router();

// admin请求后台验证
router.use((req, res, next) => {
  if (req.session.userInfo) {
    next();
  } else {
    res.send(responseClient(res, 200, 1, '身份信息已过期，请重新登录'));
  }
});


module.exports = router;

import Express from 'express';
import User from '../../models/user';
import { responseClient } from '../util';

const router = Express.Router();

router.post('/register', (req, res) => {
  const { userName, password, passwordRe } = req.body;
  if (!userName) {
    responseClient(res, 400, 2, '用户名不可为空');
    return;
  }
  if (!password) {
    responseClient(res, 400, 2, '密码不可为空');
    return;
  }
  if (password !== passwordRe) {
    responseClient(res, 400, 2, '两次密码不一致');
  }
  // 将用户添加到数据表中
  User.findOne({ username: userName })
    .then((data) => {
      if (data) {
        responseClient(res, 200, 1, '用户名已存在');
      }
      // 保存到数据库
      const user = new User({
        username: userName,
        password,
        type: 'user',
      });
      user.save()
        .then(() => {
          User.findOne({ username: userName })
            .then((userInfo) => {
              const testdata = {};
              testdata.username = userInfo.username;
              testdata.userType = userInfo.type;
              testdata.userId = userInfo._id;
              responseClient(res, 200, 0, '注册成功', data);
            });
        });
    // eslint-disable-next-line no-unused-vars
    }).catch((err) => {
      responseClient(res);
    });
});

module.exports = router;

import Express from 'express';
import User from '../../models/user';
import { responseClient, md5 } from '../util';

const router = Express.Router();
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    responseClient(res, 200, 2, '用户名不可为空');
    return;
  }
  if (!password) {
    responseClient(res, 200, 2, '密码不可为空');
  }
  // 查找用户
  User.findOne({
    username,
    password: md5(password),
  }).then((userInfo) => {
    if (userInfo) {
      // 登录成功
      const data = {};
      data.username = userInfo.username;
      data.userType = userInfo.type;
      data.userId = userInfo._id;

      // 登录成功后设置session
      req.session.userInfo = data;
      responseClient(res, 200, 0, '登录成功', data);
      return;
    }
    responseClient(res, 200, 1, '用户名密码错误');
  }).catch((err) => {
    responseClient(res);
    console.log('err', err);
  });
});

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
        password: md5(password),
        type: 'user',
      });
      user.save()
        .then(() => {
          User.findOne({ username: userName })
            .then((userInfo) => {
              const userdata = {};
              userdata.username = userInfo.username;
              userdata.userType = userInfo.type;
              userdata.userId = userInfo._id;
              responseClient(res, 200, 0, '注册成功', userdata);
            });
        });
    // eslint-disable-next-line no-unused-vars
    }).catch((err) => {
      responseClient(res);
    });
});

router.post('/updateUserInfor', (req, res) => {
  console.log(req.body);
  responseClient(res, 200, 0, 'success');
});

router.get('/authorInfo', (req, res) => {
  if (req.session.userInfo) {
    const _id = req.session.userInfo.userId;
    User.findOne({
      _id,
    }).then((userInfo) => {
      const data = {};
      data.nickname = userInfo.username;
      data.avatar = userInfo.avatar;
      data.profile = userInfo.profile;
      data.company = userInfo.company;
      data.occupation = userInfo.occupation;
      responseClient(res, 200, 0, 'success', data);
    }).catch((err) => {
      responseClient(res);
      console.log('err', err);
    });
  } else {
    responseClient(res, 200, 0, 'fail');
  }
});

// 用户验证
router.get('/userInfo', (req, res) => {
  if (req.session.userInfo) {
    responseClient(res, 200, 0, '', req.session.userInfo);
  } else {
    responseClient(res, 200, 1, '请重新登录', req.session.userInfo);
  }
});

module.exports = router;

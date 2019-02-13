import Express from 'express';
import User from '../../models/user';
import { responseClient } from '../util';


const router = Express.Router();

router.get('/getIntro', (req, res) => {
  const id = '1';
  // 查找用户
  User.findOne({
    id,
  }).then((userInfo) => {
    if (userInfo) {
      console.log('userInfo', userInfo);
      // 查找到该用户
      const data = {};
      data.username = userInfo.username;
      data.profile = userInfo.profile;
      data.avatar = userInfo.avatar;
      data.occupation = userInfo.occupation;
      data.company = userInfo.company;
      responseClient(res, 200, 0, 'success', data);
    }
  }).catch((err) => {
    responseClient(res);
    console.log('err', err);
  });
});

module.exports = router;
